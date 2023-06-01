const express = require("express");
const bookingController = require("../Controllers/bookingController");
const { validateToken } = require("../middlewares/tokenValidation");
const validateAdminRole = require("../middlewares/privilegeValidation");

const router = express.Router();

router
  .route("/")
  .get(validateToken, validateAdminRole, bookingController.getAllBookings)
  .post(validateToken, bookingController.createBooking);

router
  .route("/:userId")
  .get(validateToken, bookingController.getBookingByUserId);

router
  .route("/:id")
  .patch(validateToken, bookingController.updateBookingById)
  .delete(validateToken, bookingController.deleteBookingById)
  .get(bookingController.getBookingById);
//Admin privilege

router
  .route("/bookingStatus/:id")
  .patch(
    validateToken,
    validateAdminRole,
    bookingController.updateBookingStatus
  );

module.exports = router;
