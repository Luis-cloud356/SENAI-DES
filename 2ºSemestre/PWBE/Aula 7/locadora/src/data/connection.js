const mysql = require("mysql2/promise");

const connection = mysql.createPool({
       host: "localhost",
       user: "root",
       password: "",
       database: "locadora"
});

module.exports = connection;

/*
host -> endereço do banco de dados
user -> Usuario do banco de dados
password -> Senha do usuario
database -> Base de dados
*/