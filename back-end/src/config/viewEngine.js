const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const configViewEngine = (app) => {
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });

  //config public
  app.use(express.static(path.join("./src", "public")));

  //config body parser
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};

module.exports = configViewEngine;
