require('dotenv').config(); // this is important!
module.exports = {
"development": {
    "username": process.env.USER,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "mysql"
},
"test": {
  "username": process.env.USER,
  "password": process.env.PASSWORD,
  "database": process.env.DATABASE,
  "host": process.env.HOST,
  "dialect": "mysql"
},
"production": {
  "username": process.env.USER,
  "password": process.env.PASSWORD,
  "database": process.env.DATABASE,
  "host": process.env.HOST,
  "dialect": "mysql"
}
};