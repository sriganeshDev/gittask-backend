const mongoose = require("mongoose");
const { v4 } = require("uuid");

const SearchHistorySchema = new mongoose.Schema({
  _id: {
    type: String,
    default: v4,
  },
  userSearchedProfile: {
    type: [String],
    default: [],
  },

  userId: {
    type: String,
    ref: "Register",
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
});

const searchHistory = mongoose.model("searchHistory", SearchHistorySchema);

module.exports = searchHistory;
