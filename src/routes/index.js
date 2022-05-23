const express = require("express");
const  { route }  = require("express/lib/application");

const routes = express.Router();

const {home} = require("../controllers/home");

const PsicologoController = require("../controllers/psicologos");




routes.get("/", home);


routes.get("/psicologo/allList", PsicologoController.AllList);
routes.post("/psicologo/CreateNewPsicologo", PsicologoController.CreateNewPsicologo);
routes.get("/psicologo/findByID/:id", PsicologoController.findByID);









module.exports = routes;