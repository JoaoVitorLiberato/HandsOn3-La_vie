const {psicologo, atendimentos, pacientes} = require("../models");

const PsicologoController = {
    index: async (req, res) => {
        try {
            
            const todosPsicologos = await psicologo.findAll({ include : atendimentos });
            res.json(todosPsicologos);
 
        } catch (error) {
            console.error(error.message);
            
            res.statusCode = 500;
            res.json({erro: "Problemas no sistema, Por favor recarregue a página novamente"});

        }
    }
}