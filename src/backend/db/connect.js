const mongoose = require("mongoose");

const connectDB = (connectionURI) => {

    return mongoose.connect(connectionURI);

}

module.exports = connectDB;