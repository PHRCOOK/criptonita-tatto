const { DataTypes } = require("sequelize");
const sequelize = require("../../config-db/config-db");

const Membership = sequelize.define("Membership", {
  name: DataTypes.STRING,
  benefits: DataTypes.TEXT,
});

module.exports = Membership;
