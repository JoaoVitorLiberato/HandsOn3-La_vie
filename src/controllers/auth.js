const bcrypt = require("bcryptjs");
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



};


module.exports = AuthController;




