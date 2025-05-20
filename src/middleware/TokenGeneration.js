const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;
const Register = require("../model/UserRegister.model");

const tokenGenerator = (userdata) => {
  const token = jwt.sign({ userdata }, secretKey, { expiresIn: "8h" });
  return token;
};

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Please Signup " });
  }

  const withOutBearer = token.split(" ")[1];
  // console.log("without", withOutBearer);

  const verifyKeyinPayload = jwt.verify(withOutBearer, secretKey);

  const CheckUser = await Register.findById(verifyKeyinPayload.userdata._id);

  if (!CheckUser) {
    return res.status(400).json({ message: "user not found for this Token" });
  }

  req.user = CheckUser;
  next();
};

module.exports = { tokenGenerator, verifyToken };
