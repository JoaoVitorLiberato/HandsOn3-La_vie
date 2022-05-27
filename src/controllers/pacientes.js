const { Paciente, Psicologo, Atendimentos } = require("../models");

const PacienteController = {

    index: async (req, res) => {
        try {

            const allPacientes = await Paciente.findAll();   
            res.status(200).json(allPacientes);

        } catch (error) {
            console.error(error.message);
            res.status(500).json({ erro: "Shiiiii, There were system problems!" });

        }
    },

    store: async (req, res) => {

        try {

            const { nome, idade, email, senha} = req.body;

           
            const newPaciente = await Paciente.create(
                {
                    nome,
                    idade,
                    email,
                    senha

                },

            );


            res.json(newPaciente);
            res.status(201).json({ menssage: "New patient successfully created! " });



        } catch (error) {
            console.error(error.message);
            res.status(500).json({ erro: "Shiiiii, There were system problems!" });

        }



    },

    show: async (req, res) => {
        const { id } = req.params;

        try {
            const SeachPaciente = await Paciente.findByPk(id);


            if (SeachPaciente) {
                return res.json(SeachPaciente);
            }

            res.status(404).json({
                message: "Patient not found!",
            });


        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: "Shiiiii, There were system problems!" });

        }
    },

    update: async (req, res) => {

        try {
            const { id } = req.params;

            const { nome, idade, email, senha } = req.body;

            const updatePaciente = await Paciente.findByPk(id);

            if (!updatePaciente) {
                return res.status(404).json({
                    message: "Patient not found!",
                });
            };

            await updatePaciente.update({ nome, idade, email, senha});

            res.status(200).json(updatePaciente).send(`Psychologist successfully updated!`);
            

        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: "Shiiiii, There were system problems!" });

        }
    },

    destroy: async (req, res) => {

        const { id } = req.params;

        try {

            const paciente = await Paciente.findByPk(id);
            

            if (!paciente) {
                return res.status(404).json({
                    message: "Patient not found!",
                });

            };

            await paciente.destroy();
            res.status(204).send("");


        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: "Shiiiii, There were system problems!" });

        }



    }

}
module.exports = PacienteController;