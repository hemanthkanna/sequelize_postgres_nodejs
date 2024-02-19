const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const { DataTypes } = Sequelize;
const bcrypt = require("bcrypt");
const zlib = require("zlib");

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

      set(value) {
        const salt = bcrypt.genSaltSync(12);
        const hash = bcrypt.hashSync(value, salt);
        this.setDataValue("password", hash);
      },
    },

    description: {
      type: DataTypes.STRING,
      set(value) {
        const compressed = zlib.deflateSync(value).toString("base64");
        this.setDataValue("description", compressed);
      },

      get() {
        const value = this.getDataValue("description");
        const uncompressed = zlib.inflateSync(Buffer.from(value, "base64"));
        return uncompressed.toString();
      },
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
