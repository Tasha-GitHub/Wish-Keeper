var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wish_saver_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

// Root get route
app.get("/", function(req, res) {

    connection.query("SELECT * FROM wishes;", function(err, data) {
      if (err) throw err;
      res.render("index", { wishes: data });
    });
});


// Post route -> back to home
app.post("/create", function(req, res) {

    
  connection.query("INSERT INTO wishes (wish) VALUES (?)", [req.body.wish], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });

});

app.listen(port);
