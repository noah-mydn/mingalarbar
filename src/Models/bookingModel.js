const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  tableNumber: {
    type: Number,
    required: true
  },
  reservationDate: {
    type: Date,
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Canceled'],
    default: 'Pending'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
