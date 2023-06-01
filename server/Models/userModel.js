const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Invalid email",
    },
  },
  tel: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (phoneNumber) {
        return phoneNumber.match(/^0\d{10}$/);
      },
      message: "Invalid phone number",
    },
  },

  password: {
    type: String,
    required: true,
    validate: {
      validator: (password) => validator.isStrongPassword(password),
      message: "Your password is not strong enough",
    },
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

UserSchema.statics.register = async function (
  fullName,
  email,
  tel,
  password,
  address,
  role
) {
  // Validation
  if (!fullName || !email || !tel || !password || !address) {
    throw new Error("All required fields must be filled");
  }

  const emailExists = await this.findOne({ email });
  if (emailExists) {
    throw new Error("This email is already registered!");
  }

  const telExists = await this.findOne({ tel });
  if (telExists) {
    throw new Error("This number is already in use!");
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = await this.create({
    fullName,
    email,
    password: hashedPassword,
    tel,
    address,
    role,
  });

  return user;
};

// Static login method
UserSchema.statics.login = async function (email, password) {
  // Validation
  if (!email || !password) {
    throw new Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw new Error("The email is incorrect or not registered!");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error("The password is incorrect!");
  }

  return user;
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
