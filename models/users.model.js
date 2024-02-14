const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const { DataTypes } = Sequelize;

const User = sequelize.define(
  "user",
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },

    mobileNumber: {
      type: DataTypes.STRING,
    },

    age: {
      type: DataTypes.INTEGER,
      defaultValue: 21,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
