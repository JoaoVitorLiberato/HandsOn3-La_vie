const routes = require("../routes/index");


const login = {
    home: (req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end("Faça seu Login!");
    }
}


module.exports = login;