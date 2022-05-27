const express = require("express");

const DataBase = require("./database/index");
const routes = require("./routes/index");
const handleErro = require("./middlewares/handleError")
const authMiddleware = require("./middlewares/auth");
const jwtMiddleware = require("./middlewares/jwt");

const port = 3001;
const app = express();

DataBase.hasConnection();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use( jwtMiddleware.unless({ path: ["/", "/login", "/psicologos"] }) );

app.use(authMiddleware);

app.use(routes);

app.use(handleErro);

app.use((req, res) => {
    res.status(404).json({message: ("URL is not found")})
});



app.listen(port, () => console.log(`La-Vie server running at port: ${port}`));