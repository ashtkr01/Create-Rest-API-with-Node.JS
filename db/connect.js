const mongoose = require("mongoose");

const connectDB = (url) => {
    console.log("Connected Database");
    return mongoose.connect(url);
};

module.exports = connectDB;