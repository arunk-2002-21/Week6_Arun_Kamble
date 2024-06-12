"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// import credentails from "../common/credentails";
const sequelize = new sequelize_1.Sequelize({
    // username: credentails.postgres.USERNAME,
    // host: credentails.postgres.HOST,
    // database: credentails.postgres.DATABASE,
    // password: credentails.postgres.PASSWORD,
    // port: credentails.postgres.PORT,
    username: 'postgres',
    host: 'localhost',
    database: "Bookstore",
    password: "sqlpg24",
    port: 5432,
    dialect: "postgres",
});
sequelize.authenticate()
    .then(() => {
    console.log('Database connection established sucessfully.');
})
    .catch((err) => {
    console.log('Unable to connect with the database', err);
});
//Synchronize
sequelize.sync()
    .then(() => {
    console.log('Models synchronized with the database.');
})
    .catch((err) => {
    console.log('Unable to synchronise models with the database', err);
});
exports.default = sequelize;
//# sourceMappingURL=pgConfig.js.map