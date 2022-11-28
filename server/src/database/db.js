require("dotenv").config();
const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      `mongodb://${process.env.PORT_MONGO}/${process.env.DB_NAME}`
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Connect failure!!");
  }
};

module.exports = { connect };
