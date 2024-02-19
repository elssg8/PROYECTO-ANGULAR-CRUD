"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Option 3: Passing parameters separately (other dialects)
const sequelize = new sequelize_1.Sequelize('Tiendita', 'root', '12345678', {
    host: 'mysql',
    dialect: "mysql",
    port: 3306,
    //logging: false
});
exports.default = sequelize;
