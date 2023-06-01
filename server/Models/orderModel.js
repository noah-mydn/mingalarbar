const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Menu",
      required: true,
    },
  ],

  orderDate: {
    type: String,
    default: new Date().toISOString().slice(0, 10),
    validate: {
      validator: function (value) {
        const currentDate = new Date().toISOString().slice(0, 10);
        return value >= currentDate;
      },
      message: "Order date should be in the future or today.",
    },
  },
  orderStatus: {
    type: String,
    enum: ["Pending", "Preparing", "Ready", "Served", "Cancelled"],
    default: "Pending",
  },
  total: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["Pending", "Paid"],
    default: "Pending",
  },
  paymentMethod: {
    type: String,
    enum: ["Cash", "Credit Card", "Mobile Payment"],
    default: "Cash",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

orderSchema.pre("find", function (next) {
  this.populate("user", "fullName email tel");
  next();
});

module.exports = mongoose.model("Order", orderSchema);
