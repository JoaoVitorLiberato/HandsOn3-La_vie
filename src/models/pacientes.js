const {DataTypes} = require("sequelize");

const DataBase = require("../database/index");

const Pacientes = DataBase.define(
    "pacientes",
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

        idade: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }
);

module.exports = Pacientes;