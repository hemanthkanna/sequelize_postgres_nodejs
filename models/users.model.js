const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const { DataTypes } = Sequelize;
const bcrypt = require('bcrypt');

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
      validate: {
        len: [2, 12],
      },
      get() {
        const value = this.getDataValue("userName");
        return value.toUpperCase();
      },
    },
    email: {
      type: DataTypes.STRING,
    },

    password: {
      type: DataTypes.STRING,

      set (value) {
        const salt = bcrypt.genSaltSync(12);
        const hash = bcrypt.hashSync(value, salt);
        this.setDataValue('password', hash);
      }
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
