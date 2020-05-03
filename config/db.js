const Sequelize = require('sequelize');
const connection = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: 'jaygeegroupapp.com',
  dialect: 'mysql'
});


module.exports = connection;