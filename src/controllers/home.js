const routes = require("../routes/index");


const home = {
    home: (req, res) => {
        
        res.setHeader("Content-Type", "application/json");
        res.status(200).json("Projeto La Vie 1.0");
    }
}


module.exports = home;