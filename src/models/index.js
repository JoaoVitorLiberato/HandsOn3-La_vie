const DataBase = require("../database/index");

const Paciente = require("./pacientes");
const Psicologo = require("./psicologo");
const Atendimentos = require("./atendimentos");

Paciente.hasMany(Atendimentos);
Psicologo.hasMany(Atendimentos);

Atendimentos.belongsTo(Paciente, {
    foreignKey: "id_pacientes"
});

Atendimentos.belongsTo(Psicologo, {
    foreignKey: "id_psicologo"
});


module.exports = {
    Paciente,
    Psicologo,
    Atendimentos
};
