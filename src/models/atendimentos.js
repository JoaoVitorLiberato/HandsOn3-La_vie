const DataBase = require("../database/index");
const {DataTypes} = require("sequelize");

const Psicologo = require("./psicologo");
const Paciente = require("./paciente");


const Atendimentos = DataBase.define(
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

        psicologo_id: {
            type: DataTypes.INTEGER,
            References: {
                model: Psicologo,
                key: "id"
            }
        },

        paciente_id:{
            type: DataTypes.INTEGER,
            References: {
                model: Paciente,
                key: "id"
            }
        },

    },
    
    {tableName: "atendimentos",  timestamps: false, underscored: true}

    );