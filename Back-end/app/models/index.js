const dbConfig = require("../config/config-db");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.cours = require("./cours")(mongoose);
db.roles = require("./roles")(mongoose);

module.exports = db;
