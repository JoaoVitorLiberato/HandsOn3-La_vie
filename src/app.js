const express = require("express");
const DataBase = require("./database/index");

const port = 3001;

const app = express();
app.use(express.json());

DataBase.hasConnection();









app.listen(port, () => console.log(`Running server at port: ${port}`));

