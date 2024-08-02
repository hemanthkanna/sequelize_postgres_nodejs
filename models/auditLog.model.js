const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AuditLog = sequelize.define({
  modelName: DataTypes.STRING,
  modelId: DataTypes.STRING,
  action: DataTypes.STRING,
  oldValue: DataTypes.JSON,
  newValue: DataTypes.JSON,
  userId: DataTypes.INTEGER,
  createdAt: DataTypes.DATE,
});

module.exports = AuditLog;
