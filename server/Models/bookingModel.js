const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  tableNumber: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return value > 0 && value < 15;
      },
      message: "Table number should be between 1 and 15.",
    },
  },
  reservationDate: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        const currentDate = new Date().toISOString().slice(0, 10);
        return value >= currentDate;
      },
      message: "Reservation date should be in the future or today.",
    },
  },
  startTime: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        const currentTime = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        return (
          value >= "07:00" &&
          value <= "20:30" &&
          (this.reservationDate !== new Date().toISOString().slice(0, 10) ||
            value > currentTime)
        );
      },
      message:
        "Start time should be during opening hours and should be in the future",
    },
  },
  endTime: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        const startTime = this.startTime;
        const startTimeMinutes =
          parseInt(startTime.split(":")[0]) * 60 +
          parseInt(startTime.split(":")[1]);
        const endTimeMinutes =
          parseInt(value.split(":")[0]) * 60 + parseInt(value.split(":")[1]);
        return (
          value > startTime &&
          endTimeMinutes - startTimeMinutes >= 30 &&
          value <= "21:00"
        );
      },
      message:
        "End time should be at least 30 minutes after start time, before 9pm, and after the start time.",
    },
  },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled"],
    default: "Pending",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

bookingSchema.pre("find", function (next) {
  this.populate("user", "fullName email tel");
  next();
});

module.exports = mongoose.model("Booking", bookingSchema);
