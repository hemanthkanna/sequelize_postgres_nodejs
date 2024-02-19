const sequelize = require("./config/database");
const express = require("express");
const db = require("./models/db.index");
const app = express();
const PORT = 8001;

app.use(express.json());

const userRoutes = require("./routes/users.route");

sequelize
  .authenticate()
  .then(() => {
    console.log("Database Connection Successfull!");
  })
  .catch((err) => {
    console.log("Error Connecting to database!");
  });

db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Table and Model Synced Successfully!");
  })
  .catch((err) => {
    console.log("Error syncing the table and model!");
  });

console.log("MY MODELS :", db.sequelize.models);

app.use("/api/v1/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server Listening to the port : ${PORT}`);
});
