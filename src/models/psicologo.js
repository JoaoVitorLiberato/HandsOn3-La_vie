const {DataTypes} = require("sequelize");

const DataBase = require("../database/index");

const Psicologos = DataBase.define(
    "psicologos",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        apresentacao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }
);


module.exports = Psicologos;