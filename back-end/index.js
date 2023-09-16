const express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./src/api/product/product.router")(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
