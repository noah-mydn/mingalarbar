const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");

//Create Token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "3h",
  });
};

//Registering new User
exports.RegisterNewUser = async (req, res) => {
  const { fullName, email, tel, password, address, role } = req.body;
  try {
    const user = await User.register(
      fullName,
      email,
      tel,
      password,
      address,
      role
    );
    //create a token
    const token = createToken(user._id);
    const responseData = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      tel: user.tel,
      address: user.address,
      role: user.role || "user",
    };
    res.status(201).json({
      status: "success",
      token: token,
      data: responseData,
      message: "Registered successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: "falied",
      message: err.message,
    });
  }
};

//Existing user log in
exports.LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const responseData = {
      _id: user._id,
      email: user.email,
    };
    //create a token
    const token = createToken(user._id);
    res.status(200).json({
      status: "success",
      message: "Successfully logged in",
      token: token,
      data: responseData,
    });
  } catch (error) {
    res.status(500).json({
      status: "falied",
      message: error.message,
    });
  }
};
