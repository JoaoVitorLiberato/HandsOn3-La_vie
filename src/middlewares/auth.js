const { Psicologo } = require("../models");


module.exports = async (req, res, next) => {

    if (req.auth) {
        const psicologo = await Psicologo.findByPk(req.auth.id);
        
        if (!psicologo) {
            next({
                status: 401,
                name: "Unauthorized Error",
                inner: {
                    message: "Invalid user code.!"
                }
            })
        }
        
    }
    
    next();
    
};
