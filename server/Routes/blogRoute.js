const express = require("express");
const blogController = require("../Controllers/blogController");

const router = express.Router();

router
  .route("/")
  .get(blogController.getAllBlog)
  .post(blogController.createBlog);
router
  .route("/:id")
  .patch(blogController.updateBlog)
  .delete(blogController.deleteBlog);

module.exports = router;
