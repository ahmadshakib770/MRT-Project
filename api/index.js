const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const userRoutes = require("../server/routes/userRoutes");
const reportRoutes = require("../server/routes/reportRoutes");
const scheduleRoutes = require("../server/routes/scheduleRoutes");
const bookingRoutes = require("../server/routes/bookingRoutes");
const paymentRoutes = require("../server/routes/paymentRoutes");
const adminRoutes = require("../server/routes/admin");
const staffRoutes = require("../server/routes/staff");
const lostItemRoutes = require("../server/routes/lostItemRoutes");
const notificationRoutes = require("../server/routes/notifications");
const feedbackRoutes = require("../server/routes/feedbackRoutes");
const studentVerificationRoutes = require("../server/routes/studentVerification");
const wifiRoutes = require("../server/routes/wifiRoutes");
const adRoutes = require("../server/routes/adRoutes");

dotenv.config({ path: path.join(__dirname, '../server/.env') });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "../server/uploads")));
app.use("/api/users", userRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/schedules", scheduleRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/staff", staffRoutes);
app.use('/api/lost-items', lostItemRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/student-verification', studentVerificationRoutes);
app.use('/api/wifi', wifiRoutes);
app.use('/api/ads', adRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.error("MongoDB connection error:", err));

module.exports = app;

