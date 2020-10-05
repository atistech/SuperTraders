var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var route = require("./route");

var port = 4000;

var app = express();

//Body Parser MW
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", route);

app.listen(port, function () {
  console.log("Running on http://localhost:" + port);
});
