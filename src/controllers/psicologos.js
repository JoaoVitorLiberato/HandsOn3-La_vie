const { Psicologo } = require("../models");

const PsicologoController = {

    AllList: async (req, res) => {
        try {

            const allPsicologos = await Psicologo.findAll();
            res.json(allPsicologos);
            res.status(200).json({ menssage: "Success in listing all psychologists in La vie." });

        } catch (error) {

            console.error(error.message);
            res.status(500).json({ erro: "Shiiiii, There were system problems!" });

        }
    },

    CreateNewPsicologo: async (req, res) => {

        try {

            const { nome, email, senha, apresentacao } = req.body;

            const newPsicologo = await Psicologo.create(
                {
                    nome,
                    email,
                    senha,
                    apresentacao

                },

            );


            res.json(newPsicologo);
            res.status(201).json({ menssage: "New psychologist successfully created! " });



        } catch (error) {

            console.log(error.message);
            res.status(500).json({ erro: "Shiiiii, There were system problems!" });

        }



    },

    findByID: async (req, res) => {
        const { id } = req.params;

        try {
            const SeachPsicologo = await Psicologo.findByPk(id);


            if (SeachPsicologo) {
                return res.json(SeachPsicologo);
            }

            res.status(404).json({
                message: "Psychologist not found!",
            });


        } catch (error) {

            res.status(500).json({ error: "Shiiiii, There were system problems!" });

        }
    },

    updatePsicologo: async (req, res) => {

        try {
            const { id } = req.params;

            const { nome, email, senha, apresentacao } = req.body;

            const updatePsicologo = await Psicologo.findByPk(id);

            if (updatePsicologo == null) {
                return res.status(404).json({
                    message: "Psychologist not found!",
                });
            };


            res.staus(200).json(`Psychologist ${psicologoUpdated.nome} successfully updated!`);

            console.log(updatePsicologo);




        } catch (error) {

            res.status(500).json({ error: "Shiiiii, There were system problems!" });

        }
    },


    destroyPsicologo: async (req, res) => {

        const { id, nome } = req.params;

        try {

            const SeachPsicologo = await Psicologo.findByPk(id);
            console.log(SeachPsicologo);

            if (!SeachPsicologo) {
                return res.status(404).json({
                    message: "Psychologist not found!",
                });

            };

            await SeachPsicologo.destroy();
            res.staus(204)
            res.json(`${id} psychologist ${nome} successfully deleted`);


        } catch (error) {

            res.status(500).json({ error: "Shiiiii, There were system problems!" });

        }



    }


}


module.exports = PsicologoController;