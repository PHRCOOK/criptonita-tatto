const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const File = sequelize.define("File", {
  filename: DataTypes.STRING,
  filepath: DataTypes.STRING,
  mimetype: DataTypes.STRING,
});

module.exports = File;
