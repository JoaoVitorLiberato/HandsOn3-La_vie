const {psicologo, atendimentos, pacientes} = require("../models");

const PsicologoController = {
    AllList: async (req, res) => {
        try {
            
            const allPsicologos = await psicologo.findAll();
            res.json(allPsicologos);
 
        } catch (error) {
           
            console.error(error.message);
            res.statusCode = 500;
            res.json({erro: "Shiiiii, Houve problemas no sistema!"});

        }
    }
}


module.exports = PsicologoController;