const express = require("express");
const DbConnection = require("./src/config/configdb");
const cors = require("cors");

const authRoute = require("./src/routes/auth.route.js");
const userHistory = require("./src/routes/searchHistory.route.js");

const app = express();

app.use(cors("*"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("dotenv").config();

DbConnection();

app.use("/auth", authRoute);
app.use("/user", userHistory);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
