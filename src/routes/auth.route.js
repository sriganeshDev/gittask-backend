const express = require("express");
const router = express.Router();
const controller = require("../controller/auth.controller.js");

router
.route("/signup")
.post(controller.Signup);

router.route("/signin").post(controller.Signin);

module.exports = router;
