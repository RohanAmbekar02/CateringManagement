// server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db_connection"); // Ensure this file exports a function

// Routes
const customerRoutes = require("./Routes/customerApi");
const itemRoutes = require("./Routes/itemApi");
const orderRoutes = require("./Routes/orderApi");

const app = express();

// Connect to MongoDB
connectDB(); // Must be a function exported from db_connection.js

// Middlewares
app.use(cors());
app.use(express.json()); // Parse JSON requests

// API Routes
app.use("/api/customers", customerRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/orders", orderRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend Server Running Successfully!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
