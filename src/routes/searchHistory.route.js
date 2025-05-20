const express = require("express");
const router = express.Router();
const controller = require("../controller/searchHistory.controller");
const { verifyToken } = require("../middleware/TokenGeneration");

router.route("/search-history").post(verifyToken, controller.create);

module.exports = router;
