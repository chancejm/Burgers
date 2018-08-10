const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const routes = require("./controllers/burgerController.js");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(port, function() {
  console.log("Server listening on: http://localhost:" + port);
});
