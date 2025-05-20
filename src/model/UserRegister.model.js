const mongoose = require("mongoose");
const { v4 } = require("uuid");

const RegisterSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: v4,
  },
  userName: {
    type: String,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
  },
});

const UserRegister = mongoose.model("Register", RegisterSchema);

module.exports = UserRegister;
