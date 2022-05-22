const DataBase = require("../database/index");
const {DataTypes} = require("sequelize");



const Psicologo = DataBase.define(
    "psicologo",
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
    },
    { tableName: "psicologo", timestamps: false, underscored: true }
);


module.exports = Psicologo;