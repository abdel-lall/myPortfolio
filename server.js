require("dotenv").config();
var express = require("express");
var app = express();
var path = require("path");

var PORT = process.env.PORT || 3000;
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.CLIENTID, // ClientID
  process.env.SECRET, // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRECHTOKEN
});
const accessToken = oauth2Client.getAccessToken();

const smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.USER,
    clientId: process.env.CLIENTID,
    clientSecret: process.env.SECRET,
    refreshToken: process.env.REFRECHTOKEN,
    accessToken: accessToken
  }
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public", "main.html"));
});
app.get("/contac", function(req, res) {
  res.sendFile(path.join(__dirname, "./public", "contact.html"));
});
app.get("/main", function(req, res) {
  res.sendFile(path.join(__dirname, "./public", "main.html"));
});
app.get("/portfolio", function(req, res) {
  res.sendFile(path.join(__dirname, "./public", "portfolio.html"));
});
app.post("/contact", function(req, res) {
  var { name, email, message } = req.body;
  var email = `name: ${name} email: ${email} message: ${message}`;
  let mailOptions = {
    from: "portfolio.alproductions@gmail.com",
    to: "abdelmounaim.lallouache@gmail.com",
    subject: "portfolio",
    generateTextFromHTML: true,
    text: email
  };
  smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? res.send("err") : res.send("sent");
    smtpTransport.close();
  });
});

app.listen(PORT, function() {
  console.log("listening on port" + PORT);
});
