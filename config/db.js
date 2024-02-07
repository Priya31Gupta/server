const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb+srv://priyakumarigupta790:crl1Mc87m8kz0ZO3@students-management.zv3v6pa.mongodb.net/");
};

module.exports = connect;
