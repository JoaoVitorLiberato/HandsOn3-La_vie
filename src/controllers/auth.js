
const Psicologo = require("../models/psicologo");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");

const AuthController = {
    signin: async (req, res) => {

        try {
            const { email, senha } = req.body;

            const psicologo = await Psicologo.findOne(
                {
                    where: {
                        email,
                    }
                });


            if (!psicologo || !bcrypt.compareSync(senha, psicologo.senha)) {

                return res.status(401).json({ error: "Invalid user or password" });

            }

            const token = jwt.sign(
                {
                    id: psicologo.id,
                    nome: psicologo.nome,
                    email: psicologo.email
                }, 
                secret.key, 
            );

            const verify = jwt.verify(token, secret.key)

            return res.json(token);





        } catch (error) {
            res.status(500).json({ erro: "Shiiiii, There were system problems!" });
        }

    },



};


module.exports = AuthController;




