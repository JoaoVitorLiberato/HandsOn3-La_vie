const { Atendimentos, Psicologo, Paciente } = require("../models");


const AtendimentosController = {

    index: async (req, res) => {

        try {

            const Calls = await Atendimentos.findAll({ include: Paciente });
            res.status(200).json(Calls);

        } catch (error) {

            res.status(500).json({ error: "Shiiiii, There were system problems!" });

        }
    },

    store: async (req, res) => {

        const { paciente_id, psicologo_id, data_atendimento, observacao } = req.body;


        try {


            const NewCall = await Atendimentos.create(
                {
                    paciente_id,
                    psicologo_id,
                    data_atendimento,
                    observacao
                }
            );

            return res.status(201).json(NewCall);



        } catch (error) {

            console.error(error.message);
            res.status(500).json({ error: "Shiiiii, There were system problems!" });

        }
    },

    show: async (req, res) => {

        try {

            const { id } = req.params;
            const atendimentos = await Atendimentos.findByPk(id);

            if (atendimentos) {
                return res.status(200).json(atendimentos);
            }

            res.status(404).json({ message: "service not found!" });



        } catch (error) {

            console.error(error.message);
            res.status(500).json({ error: "Shiiiii, There were system problems!" });

        }
    },


}


module.exports = AtendimentosController;