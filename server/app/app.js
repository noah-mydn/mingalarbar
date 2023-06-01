const express = require("express");
const cors = require("cors");

//Routers
const userRouter = require("../Routes/userRoute");
const menuRouter = require("../Routes/menuRoute");
const blogRouter = require("../Routes/blogRoute");
const bookingRouter = require("../Routes/bookingRoute");
const orderRouter = require("../Routes/orderRoute");

let app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

app.use("/api/v1/users", userRouter);
app.use("/api/v1/menus", menuRouter);
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/bookings", bookingRouter);
app.use("/api/v1/orders", orderRouter);

module.exports = app;
