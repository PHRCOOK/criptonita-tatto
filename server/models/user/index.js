const { DataTypes } = require("sequelize");
const sequelize = require("../../config-db/config-db");

const User = sequelize.define("User", {
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING,
});

module.exports = User;
