const bcrypt = require("bcrypt");
const jtw = require("jsonwebtoken");

const Psicologo = require("../models/psicologo");
const secret = require("../config/secret");

const AuthController = {
    signin: async (req, res) => {
        const {email, senha} = req.body;

        const psicologo = await Psicologo.findOne( { where : {email} } );

        if(!psicologo || !bcrypt.compareSync(senha, psicologo.senha)){
            return res.status(401).json("Invalid user or password");
        }

        const psicologoLogin = {
            id: psicologo.id,
            nome: psicologo.nome,
            email: psicologo.email
        };

        const token = jtw.sign(psicologoLogin, secret.key);

        return res.json( { token, psicologoLogin } );
    }, 
    
    signup: async (req, res) => {

        const { nome, email, senha , apresentacao }  = req.body;
        const password = bcrypt.hashSync(senha, 8);

        const {id} = await Psicologo.create({ nome, email, senha: password });
        const psicologo = { id, nome, email, apresentacao };

        const token = jtw.sign(psicologo, secret.key);

        return res.json( { token, psicologo } );

    },

};


module.exports = AuthController;




