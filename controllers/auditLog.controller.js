const AuditLog = require("../models/auditLog.model");

// Retrieve audit logs for a specific model instance
const userAuditLogs = await AuditLog.findAll({
  where: {
    modelName: "User",
    modelId: userId,
  },
  order: [["createdAt", "DESC"]],
});

// Display audit logs as versions
userAuditLogs.forEach((log) => {
  console.log(`Version ${log.id}: ${log.action} on ${log.createdAt}`);
  console.log(`Old Value: ${JSON.stringify(log.oldValue)}`);
  console.log(`New Value: ${JSON.stringify(log.newValue)}`);
  console.log("----------------------");
});
