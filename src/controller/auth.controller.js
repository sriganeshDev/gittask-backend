const Register = require("../model/UserRegister.model.js");
const bcrypt = require("bcrypt");
const { tokenGenerator } = require("../middleware/TokenGeneration.js");

const Signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findEmail = await Register.findOne({ email });

    if (findEmail) {
      return res.status(400).json({
        message: "Email is already exist",
      });
    }
    const HashPassword = await bcrypt.hash(password, 10);
    const Data = {
      ...req.body,
      password: HashPassword,
    };

    const saveUser = await Register.create(Data);

    res.status(201).json({ message: "User Registered successfully", saveUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
    // console.log(error);
  }
};

const Signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findEmail = await Register.findOne({ email });

    if (!findEmail) {
      return res
        .status(401)
        .json({ message: "Email not Exist , Please Register " });
    }

    const verifyPass = await bcrypt.compare(password, findEmail.password);

    if (!verifyPass) {
      return res.status(401).json({ message: "Invalid password" });
    } else {
      const token = tokenGenerator(findEmail);
      res.status(200).json({ message: "Login Successfull ", token });
    }
  } catch (error) {
    res.status(400).json({ error: error.message, status: false });
  }
};

module.exports = { Signup, Signin };
