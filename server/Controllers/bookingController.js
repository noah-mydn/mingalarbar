const Booking = require("../Models/bookingModel");

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = req.query.userId
      ? await Booking.find().where("user").equals(req.query.userId)
      : await Booking.find();
    res.status(200).json({
      status: "success",
      data: bookings,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({
        status: "failed",
        error: "Booking not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: booking,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};

exports.getBookingByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const bookings = await Booking.find({ user: userId });
    if (bookings.length === 0) {
      return res.status(404).json({
        status: "failed",
        error: "Booking not found with this userId",
      });
    }
    res.status(200).json({
      status: "success",
      data: bookings,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};

exports.createBooking = async (req, res) => {
  try {
    const { tableNumber, reservationDate, startTime, endTime, status } =
      req.body;

    // Get the logged-in user ID from the authentication token
    const userId = req.user.id;

    // Create the booking entity with the user ID
    const booking = new Booking({
      tableNumber,
      reservationDate,
      startTime,
      endTime,
      user: userId,
    });

    // Populate the user details (fullName, email, tel)
    await booking.populate("user", "fullName email tel");

    // Save the booking to the database
    await booking.save();

    return res.status(201).json({
      status: "success",
      data: booking,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};

exports.updateBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    // Check if the id exists
    if (!id) {
      return res.status(404).json({
        status: "failed",
        error: "No booking found",
      });
    }
    // Find the existing booking
    const existingBooking = await Booking.findById(id);

    if (!existingBooking) {
      return res.status(404).json({
        status: "failed",
        error: "No booking found",
      });
    }

    // Merge the existing booking with the updated values from the request body
    const updatedBooking = Object.assign(existingBooking, req.body);

    // Update and save the booking
    const savedBooking = await updatedBooking.save();

    return res.status(200).json({
      status: "success",
      data: savedBooking,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};

//Admin privileges
exports.updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    // Check if the id exists
    const booking = await Booking.findByIdAndUpdate(
      id,
      { status: req.body.status },
      { new: true }
    );
    if (!booking) {
      return res.status(404).json({
        status: "failed",
        error: "No booking found",
      });
    }
    return res.status(200).json({
      status: "success",
      data: booking,
      message: "Booking status is updated!",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};

exports.deleteBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    //Check if the id exists
    if (!id) {
      return res.status(404).json({
        status: "failed",
        error: "Booking id not found",
      });
    }
    //Delete booking
    const booking = await Booking.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      message: "Booking is deleted",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};
