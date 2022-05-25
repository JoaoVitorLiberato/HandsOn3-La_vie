const bcrypt = require("bcrypt");
const jtw = require("jsonwebtoken");

const Psicologo = require("../models/psicologo");
const secret = require("../config/secret");

const AuthController = {
    signin: async (req, res) => {

        try {
            const { email, senha } = req.body;

            const psicologo = await Psicologo.findOne({ where: { email } });

            if (!psicologo || !bcrypt.compareSync(senha, psicologo.senha)) {
                return res.status(401).json("Invalid user or password");
            }

            const psicologoLogin = {
                id: psicologo.id,
                nome: psicologo.nome,
                email: psicologo.email
            };

            const token = jtw.sign(psicologoLogin, secret.key);

            return res.json(token);

        } catch (error) {
            console.log(error);
        }

    },


    signup: async (req, res) => {

        try {

            const { nome, email, senha, apresentacao } = req.body;
            const ExistingEmail = await Psicologo.count({ where: { email } });
            const passCrypto = bcrypt.hashSync(senha, 10);

            if (!ExistingEmail) {

                const newPsic = await Psicologo.create({ nome, email, senha: passCrypto, apresentacao });
                return res.json(newPsic)
            } else {
                return res.status(400).json(" Existing");
            }

        } catch (error) {

            console.log(error.message);
            res.status(500).json({ erro: "Shiiiii, There were system problems!" });
        }

    },

};


module.exports = AuthController;




