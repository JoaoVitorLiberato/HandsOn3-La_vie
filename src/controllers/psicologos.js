const { Psicologo } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../config/secret")

const PsicologoController = {

    index: async (req, res) => {
        try {

            const allPsicologos = await Psicologo.findAll();
            res.json(allPsicologos);
            res.status(200).json({ menssage: "Success in listing all psychologists in La vie." });

        } catch (error) {

            console.error(error.message);
            res.status(500).json({ erro: "Shiiiii, There were system problems!" });

        }
    },

    store: async (req, res) => {

        try {

            const { nome, email, senha, apresentacao } = req.body;
            const hashPass = bcrypt.hashSync(senha, 10);

            const { id } = await Psicologo.create(
                {
                    nome,
                    email,
                    senha: hashPass,
                    apresentacao

                },
            );

            const NewPsy = {
                id,
                nome,
                email,
                senha,
                apresentacao,
            };

            const token = jwt.sign(NewPsy, secret.key);

            res.status(201).json( {NewPsy} );




            res.json(newPsicologo);
            res.status(201).json({ menssage: "New psychologist successfully created! " });



        } catch (error) {

            console.log(error.message);
            res.status(500).json({ erro: "Shiiiii, There were system problems!" });

        }


    },

    show: async (req, res) => {
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

     store: async (req, res) => {

        try {

            const { nome, email, senha, apresentacao } = req.body;
            const ExistingEmail = await Psicologo.count({ where: { email } });
            const passCrypto = bcrypt.hashSync(senha, 10);

            if (!ExistingEmail) {

                const newPsic = await Psicologo.create({ nome, email, senha: passCrypto, apresentacao });
                return res.json(newPsic)
            } else {
                return res.status(400).json({ message: "Existing"});
            }

        } catch (error) {

            console.log(error.message);
            res.status(500).json({ erro: "Shiiiii, There were system problems!" });
        }

    },

    update: async (req, res) => {

        try {
            const { id } = req.params;

            const { nome, email, senha, apresentacao } = req.body;

            const updatePsicologo = await Psicologo.findByPk(id);

            if (!updatePsicologo) {
                return res.status(404).json({
                    message: "Psychologist not found!",
                });
            };

            await updatePsicologo.update({ nome, email, senha, apresentacao});

            res.status(200).json(updatePsicologo).send(`Psychologist successfully updated!`);
            

        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: "Shiiiii, There were system problems!" });

        }
    },


    destroy: async (req, res) => {

        const { id } = req.params;

        try {

            const psicologos = await Psicologo.findByPk(id);
            

            if (!psicologos) {
                return res.status(404).json({
                    message: "Psychologist not found!",
                });

            };

            await psicologos.destroy();
            res.status(204).send("");


        } catch (error) {
            
            res.status(500).json({ error: "Shiiiii, There were system problems!" });

        }



    }


}


module.exports = PsicologoController;