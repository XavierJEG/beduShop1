const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE, // Nombre de la BD
    process.env.USER, // Usuario
    process.env.PASSWORD, // Contraseña
{
    host: process.env.HOST, // host
    dialect: 'mysql', // gestor de bases de datos
});

module.exports = sequelize;