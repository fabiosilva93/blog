const Sequelize = require('sequelize');

//Conexão com o banco de dados MySQL
const sequelize = new Sequelize('blog_app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

//Aqui estamos exportando tanto a constante Sequelize com S maiusculo, que é o require
//e o sequelize com s minusculo que é o objeto que cria a conexão com o BD
//Assim exportamos um objeto com as 2 contantes.
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};