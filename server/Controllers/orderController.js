const Order = require("../Models/orderModel");

exports.getAllOrders = async (req, res) => {
  try {
    const orders = req.query.userId
      ? await Order.find().where("user").equals(req.query.userId)
      : await Order.find();
    res.status(200).json({
      status: "success",
      total: orders.length,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

exports.placeAnOrder = async (req, res) => {
  try {
    // Get the logged-in user ID from the authentication token
    const userId = req.user.id;

    // Check if menu items, total, and orderDate are provided
    if (!req.body.items || !req.body.total) {
      return res.status(400).json({
        status: "failed",
        message: "Please provide menu items, total, and orderDate",
      });
    }

    // Place order
    const order = await Order.create({
      items: req.body.items,
      orderDate: req.body.orderDate,
      total: req.body.total,
      paymentStatus: req.body.paymentStatus || "Pending",
      paymentMethod: req.body.paymentMethod || "Cash",
      user: userId,
    });

    // Populate detailed menu data for the order items
    await order.populate("items", "-__v");

    res.status(201).json({
      status: "success",
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

exports.cancelOrder = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        status: "failed",
        message: "Please provide order ID",
      });
    }

    const order = await Order.findById(id);

    // Check if the order exists
    if (!order) {
      return res.status(404).json({
        status: "failed",
        error: "Order not found",
      });
    }

    // Check the order status
    if (
      order.orderStatus === "Preparing" ||
      order.orderStatus === "Ready" ||
      order.orderStatus === "Served"
    ) {
      return res.status(400).json({
        status: "failed",
        error: `Cannot cancel the order as it is already in ${order.orderStatus}`,
      });
    }

    // Check if the order is pending
    if (order.orderStatus === "Pending" && order.paymentStatus === "Pending") {
      // Update the order status to canceled
      order.orderStatus = "Canceled";
      await order.save();
      return res.status(200).json({
        status: "success",
        message: "Your order is cancelled",
      });
    }

    // Check if the payment status is paid
    if (order.orderStatus === "Pending" && order.paymentStatus === "Paid") {
      // Provide refund message
      const refundMessage = "Refund will be provided for the canceled order.";
      await order.save();
      return res.status(200).json({
        status: "success",
        message: `Order canceled successfully. ${refundMessage}`,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};

//Admin privileges
exports.updateOrderStatus = async (req, res) => {
  console.log(req.params);
  //Check if the orderId exists
  try {
    const { id } = req.params;
    //Check if the  order exists

    const order = await Order.findByIdAndUpdate(
      id,
      { orderStatus: req.body.orderStatus },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({
        status: "failed",
        error: "Order not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Order status updated successfully",
      data: order,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};
