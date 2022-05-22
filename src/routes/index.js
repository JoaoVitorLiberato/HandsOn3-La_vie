const express = require("express");
const  { route }  = require("express/lib/application");

const routes = express.Router();

const homeController = require("../controlles/home");
const {home} = homeController;


routes.get("/", home);









module.exports = routes;