const mongoose = require("mongoose");

const Connect = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("DataBase Connected Sucessfully....!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = Connect;
