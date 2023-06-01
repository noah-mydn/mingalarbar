const express = require("express");
const orderController = require("../Controllers/orderController");
const { validateToken } = require("../middlewares/tokenValidation");
const validateAdminRole = require("../middlewares/privilegeValidation");

const router = express.Router();

router
  .route("/")
  .get(validateToken, validateAdminRole, orderController.getAllOrders)
  .post(validateToken, orderController.placeAnOrder);

// For admin to update order status
router
  .route("/:id")
  .patch(validateToken, validateAdminRole, orderController.updateOrderStatus);

// For regular users to cancel their orders
router.route("/cancel/:id").patch(validateToken, orderController.cancelOrder);

module.exports = router;
