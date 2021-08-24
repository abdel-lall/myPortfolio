require("dotenv").config();
var express = require("express");
var app = express();
var path = require("path");

var PORT = process.env.PORT || 3000;





app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", function(req, res) {
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


app.post("/contact", function(req, res) {
  var { name, email, message } = req.body;
  console.log(name +' '+email+''+message)
});

app.listen(PORT, function() {
  console.log("listening on port" + PORT);
});
