'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    mobile_number: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    month_of_birth: DataTypes.STRING,
    date_of_birth: DataTypes.STRING,
    year_of_birth: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};