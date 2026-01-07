const sequelize = require("../config/db.config");
const User = require("./user.model");

sequelize.sync();
module.exports = { sequelize, User };
