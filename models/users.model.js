const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define('user', {
    userId : {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: Sequelize.DataTypes.STRING,
        allowNull : false,
    },
    email : {
        type : Sequelize.DataTypes.STRING
    },

    mobileNumber : {
        type : Sequelize.DataTypes.STRING,
    },

    age : {
        type : Sequelize.DataTypes.INTEGER,
        defaultValue: 21  
    },

}, {
    timestamps : false
})

module.exports = User;