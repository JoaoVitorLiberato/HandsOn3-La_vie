const express = require("express");
const DataBase = require("./database/index")


const app = express();
app.use(express.json());

DataBase.hasConnection();









app.listen(3001, () => console.log("Running server at port: 3001."));

