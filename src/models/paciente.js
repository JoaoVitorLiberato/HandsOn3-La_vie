const DataBase = require("../database/index");
const {DataTypes} = require("sequelize");

const Paciente = DataBase.define(
    "paciente",
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

    },
    { tableName: "paciente", timestamps: false, underscored: true }
);

module.exports = Paciente;