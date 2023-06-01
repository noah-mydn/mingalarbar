const mongoose = require("mongoose");

const menusSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required field"],
    unique: true,
  },
  imageUrl: {
    type: String,
    required: [true, "Image is required field"],
  },
  rating: Number,
  description: String,
  category: {
    type: [String],
    default: "other",
    required: [true, "Category is required field"],
  },
  type: String,
  price: {
    type: String,
    required: [true, "Price is required field"],
  },
});

const Menu = mongoose.model("Menu", menusSchema);

module.exports = Menu;
