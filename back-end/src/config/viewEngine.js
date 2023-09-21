const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const configViewEngine = (app) => {
  //config view engine
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");

  //config public
  app.use(express.static(path.join("./src", "public")));
  app.use(express.static(path.join("./src", "public/css/index.css")));

  //config body parser
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};

module.exports = configViewEngine;
