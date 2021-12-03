require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const Message = require('./models/message.js')
const Traffic = require('./models/traffic.js');
const moment = require('moment-timezone');
var favicon = require('serve-favicon')

app.use(express.static("public"));
app.use(session({ secret: "abdel" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

passport.use(new LocalStrategy(
    function(username, password, done) {
        var user = {
            id: process.env.ID,
            username: username,
            password: password
        }
        validatepassword(password, function(res) {
            if (res) {

                return done(null, user, { message: 'correct password.' })
            }
            return done(null, false, { message: 'Incorrect password.' });
        })

    }
));
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    var user = {
        id: id,
        username: process.env.USER,
        password: process.env.HASHPASS
    }

    done(null, user);

});

function checkAuth(req, res, next) {
    if (req.user) {
        next()
    } else {
        res.redirect('/settingLogin')
    }
}

function validatepassword(pass, cb) {

    bcrypt.compare(pass, process.env.HASHPASS, function(err, res) {
        cb(res)
    })


}

app.get("/", function(req, res) {
    var ip = req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress ||
        null;
    const visit = new Traffic({
        ip,
        time: moment().tz("America/Chicago").format('MMMM Do YYYY, h:mm:ss a')
    })
    visit.save()
        .then(function(resault) {
            res.sendFile(path.join(__dirname, "./public", "landingPage.html"));
        })
        .catch(function(err) {
            console.log(err)
            res.sendFile(path.join(__dirname, "./public", "landingPage.html"));

        })


});
app.get("/main", function(req, res) {
    res.sendFile(path.join(__dirname, "./public", "main.html"));
});
app.get("/works", function(req, res) {
    res.sendFile(path.join(__dirname, "./public", "works.html"));
});
app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "./public", "contact.html"));
});
app.get("/settings", function(req, res) {
    res.sendFile(path.join(__dirname, "./public", "settings.html"));
});
app.get("/settingLogin", function(req, res) {
    res.sendFile(path.join(__dirname, "./public", "settingsLogin.html"));
});
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/settingLogin');
});

app.post("/contact", function(req, res) {
    var { name, email, message } = req.body;
    const newMessage = new Message({
        name,
        email,
        message,
    })
    newMessage.save()
        .then(function(resault) {
            res.send(resault)
        })
        .catch(function(err) {
            console.log(err)
        })
});
app.post("/settingLogin", function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.send(info.message); }
        req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.send(info.message);
        });
    })(req, res, next);
});
app.post("/settings", function(req, res) {
    Traffic.find().then(function(trafRes) {
        Message.find().then(function(messRes) {
                res.send({ trafRes, messRes })
            })
            .catch(function(errm) {
                console.log(`messagedb err${errm}`)
            })
    }).catch(function(errt) {
        console.log(`trafficdb err${errt}`)
    })
})


app.delete('/settings', function(req, res) {
    var id = req.body.id
    var dataType = req.body.dataType
    if (dataType == "traffic") {
        Traffic.findByIdAndDelete(id, function(err) {
            if (err) console.log(err);
            res.send('succes');
        });
    } else if (dataType == 'message') {
        Message.findByIdAndDelete(id, function(err) {
            if (err) console.log(err);
            res.send('succes');
        });
    }


})


app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, "./public", "notFound.html"));
});


mongoose.connect("'mongodb://localhost:27017/portfolio", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function(res) {
        app.listen(PORT, function() {
            console.log("listening on port" + PORT);
        })
    }).catch(function(err) {
        console.log(err)
    })