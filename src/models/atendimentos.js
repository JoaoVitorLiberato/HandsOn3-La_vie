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

        paciente_id:{
            type: DataTypes.INTEGER,
            References: {
                model: Paciente,
                key: "id"
            }
        },

        data_atendimento: {
            type: DataTypes.DATE,
            allowNull : false,
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

    },
    
    {tableName: "atendimentos",  timestamps: false, underscored: true}

    );

    module.exports = Atendimentos;