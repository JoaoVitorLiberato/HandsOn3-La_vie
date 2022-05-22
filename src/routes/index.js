const express = require("express");
const  { route }  = require("express/lib/application");

const routes = express.Router();

const {home} = require("../controlles/home");

const PsicologoController = require("../controlles/psicologos");




routes.get("/", home);


routes.get("/psicologo/allList", PsicologoController.AllList);









module.exports = routes;