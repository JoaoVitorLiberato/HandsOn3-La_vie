const DataBase = require("../database/index");

const Paciente = require("./paciente");
const Psicologo = require("./psicologo");
const Atendimentos = require("./atendimentos");

Atendimentos.belongsTo(Paciente, {
    foreignKey: "paciente_id"
});

// Atendimentos.belongsTo(Psicologo, {
//     foreignKey: "psicologo_id"
// });


module.exports = {
    Paciente,
    Psicologo,
    Atendimentos
};
