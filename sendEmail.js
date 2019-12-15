const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth : {
        user: 'portfolio.alproductions@gmail.com',
        pass : 'Eexy6993+'
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
});




const sendMail = function(message, cb){
    let mailOptions = {
        from: 'portfolio.alproductions@gmail.com',
        to : 'abdelmounaim.lallouache@gmail.com',
        subject : 'portfolio',
        text : message
    }
    
    
    transporter.sendMail(mailOptions, function(err,data){
        if (err){cb(err, null)}
        else{cb(null,data)}
        
    })
}
module.exports = sendMail;