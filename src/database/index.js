const sequelize = require("sequelize");


const DB_NAME = "la_vie";
const DB_USER = "root";
const DB_PASS = "3423_Vitor";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306
}


let dataBase = {};


try {

    dataBase = new sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);

} catch (error) {
    console.error('error when connecting the database');
};

const hasConnection = async () => {

    try {

        await dataBase.authenticate();
        console.log("Connected DataBase!");

    } catch (error) {
        console.error('error when connecting the database');
    }

}

Object.assign(dataBase, {
    hasConnection
});

module.exports = dataBase;

