const express = require("express");
const  { route }  = require("express/lib/application");
const routes = express.Router();

const {home} = require("../controllers/home");
const ControllerPsicologos = require("../controllers/psicologos");
const ControllerPacientes = require("../controllers/pacientes");




routes.get("/", home);


routes.get("/psicologos", ControllerPsicologos.index);
routes.post("/psicologos", ControllerPsicologos.store);
routes.get("/psicologos/:id", ControllerPsicologos.show);
routes.put("/psicologos/:id", ControllerPsicologos.update);
routes.delete("/psicologos/:id", ControllerPsicologos.destroy);


routes.get("/pacientes", ControllerPacientes.index);
routes.post("/pacientes", ControllerPacientes.store);
routes.get("/pacientes/:id", ControllerPacientes.show);
routes.put("/pacientes/:id", ControllerPacientes.update);
routes.delete("/pacientes/:id", ControllerPacientes.destroy);



module.exports = routes;