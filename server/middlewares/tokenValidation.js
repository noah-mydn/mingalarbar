const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

const validateToken = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const { _id } = decoded;

      req.user = await User.findOne({ _id }).select("-password");

      next();
    } catch (error) {
      res.status(401).json({ message: error.message0 });
    }
  } else {
    res.status(401).send({
      message: "Unauthorized Access",
    });
  }
};

module.exports = { validateToken };
