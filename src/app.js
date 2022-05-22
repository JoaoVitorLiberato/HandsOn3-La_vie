const express = require("express");
const DataBase = require("./database/index");
const routes = require("./routes/index")

const port = 3001;

const app = express();

DataBase.hasConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


app.use((req, res) => {
    res.statusCode(404).json({messager: "URL not found"})
});

app.listen(port, () => console.log(`Running server at port: ${port}`));