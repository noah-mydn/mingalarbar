const express = require("express");
const menuController = require("../Controllers/menuController");
const { validateToken } = require("../middlewares/tokenValidation");

const router = express.Router();

router
  .route("/")
  .get(validateToken, menuController.getAllMenu)
  .post(menuController.postMenu);

router
  .route("/:id")
  .get(validateToken, menuController.getMenuById)
  .patch(menuController.updateMenu)
  .delete(menuController.deleteMenu);

module.exports = router;
