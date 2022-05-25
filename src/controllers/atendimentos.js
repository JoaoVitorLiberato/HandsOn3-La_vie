const { op } = require("sequelize");
const { Atendimentos, Psicologo, Paciente } = require("../models");


const AtendimentosController = {

    index: async (req, res) => {

        try {
            
            const SigninPsi = await Psicologo.findByPk(req.auth.id)
            const Calls = await Atendimentos.findAll( {include: Paciente });
            res.json(Calls);

        } catch (error) {

            res.status(500).json({ error: "Shiiiii, There were system problems!" });
            
        }
    }


}

module.exports = AtendimentosController;