const path = require("path");
const express = require("express");


const configViewEngine = (app) => {
// console.log("__dirname", path.join("/src", "views"));
  app.set('views', path.join('../src', 'views'))
  app.set('view engine', 'ejs')
  app.use(express.static(path.join('../src', "public")));
//   console.log((path.join('./src', "public")));
}

module.exports = configViewEngine;


