const Blog = require("../Models/blogModel");

exports.getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      status: "success",
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: error.message,
    });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const { url, alt, title, desc } = req.body;
    //Check if blog contains all required info
    if (!url || !title || !desc) {
      return res.status(400).json({
        status: "failed",
        error: "Please add all the required fields.",
      });
    }
    const blog = await Blog.create({
      url,
      alt,
      title,
      desc,
    });

    res.status(201).json({
      status: "success",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: error.message,
    });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    //Check if id exists in blog database
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({
        status: "failed",
        error: "No blog found with the given id.",
      });
    }
    //Update blog
    const updatedBlog = await Blog.updateOne(
      { _id: id },
      {
        $set: {
          url: req.body.url,
          alt: req.body.alt,
          title: req.body.title,
          desc: req.body.desc,
        },
      }
    );

    res.status(201).json({
      status: "success",
      data: updatedBlog,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: error.message,
    });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    //Delete blog
    const deletedBlog = await Blog.findOneAndDelete({
      _id: id,
    });
    res.status(200).json({
      status: "success",
      message: `The blog with blog id ${id} is deleted successfully.`,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: error.message,
    });
  }
};
