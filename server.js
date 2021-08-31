require("dotenv").config();
var express = require("express");
var app = express();
var path = require("path");
var session = require("express-session");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose')
const bcrypt = require('bcrypt')
var PORT = process.env.PORT || 3000;
bodyParser = require("body-parser");



app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  function(username, password, done) {
    var user = {
      id : process.env.ID,
      username: username,
      password: password
    }
    validatepassword(password,function (res) { 
    if (res) {
      
      return done(null, user,{ message: 'correct password.' }) 
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
      id : id,
      username: process.env.USER,
      password: process.env.HASHPASS
    }
      
    done(null, user);
    
  });

function checkAuth(req,res,next) {
  if(req.user){
    next()
  }else{
    res.redirect('/settingLogin')
  }
}

function validatepassword(pass,cb){

bcrypt.compare(pass,process.env.HASHPASS,function(err,res) {
  cb(res)
})
    
 
}

app.get("/", function(req, res) {
  var ip = req.headers['x-forwarded-for'] ||
     req.socket.remoteAddress ||
     null;
  res.sendFile(path.join(__dirname, "./public", "landingPage.html"));
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
app.get("/settings",checkAuth, function(req, res) {
  
  res.sendFile(path.join(__dirname, "./public", "settings.html"));
});
app.get("/settingLogin", function(req, res) {
  res.sendFile(path.join(__dirname, "./public", "settingsLogin.html"));
});
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/settingLogin');
});

app.post("/contact", function(req, res) {
  var { name, email, message } = req.body;
  console.log(name +' '+email+''+message)
});
app.post("/settingLogin",function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.send(info.message); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.send(info.message);
    });
  })(req, res, next);
});


app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, "./public", "notFound.html"));
});


mongoose.connect("'mongodb://localhost:27017/portfolio",{useNewUrlParser: true, useUnifiedTopology: true })
.then(function(res) {
  app.listen(PORT, function() {
    console.log("listening on port" + PORT);
  })
}).catch(function(err) {
  console.log(err)
})