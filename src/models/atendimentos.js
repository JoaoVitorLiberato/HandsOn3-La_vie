const {DataTypes} = require("sequelize");
const Psicologos = require("./psicologo");
const Pacientes = require("./pacientes");
const dataBase = require("../database");

const Atendimentos = dataBase.define(
    "atedimentos",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        data_atendimento: {
            type: DataTypes.DATE
        },

        observacao: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        id_psicologo: {
            type: DataTypes.INTEGER,
            References: {
                model: Psicologos,
                key: "id"
            }
        },

        id_pacientes:{
            type: DataTypes.INTEGER,
            References: {
                model: Pacientes,
                key: "id"
            }
        },

    },
    
    {tableName: "atendimentos",  timestamps: false, underscored: true}

    );