const mysql = require("mysql");
const util = require("util");
const { db } = require("./index");
const connection = mysql.createPool(db);
module.exports = util.promisify(connection.query).bind(connection);
