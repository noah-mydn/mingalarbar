const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "ImageUrl is required field"],
  },
  alt: {
    type: String,
  },

  title: {
    type: String,
    required: [true, "Title is required field"],
    unique: true,
  },

  desc: {
    type: String,
    required: [true, "Description is required field"],
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
