const express = require("express");
const router = express.Router();
const Order = require("../Models/order");

// 1. POST: Create New Order
router.post("/", async (req, res) => {
  try {
    const { customer, date, items, totalAmount, paidAmount } = req.body;
    const newOrder = new Order({
      customer,
      date,
      items,
      totalAmount,
      paidAmount,
      unpaidAmount: totalAmount - paidAmount
    });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 2. GET: Fetch All Orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ date: -1 }); // Latest orders pehle
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 3. GET: Fetch Single Order by ID
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order nahi mila" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 4. PUT: Update Order
router.put("/:id", async (req, res) => {
  try {
    const { totalAmount, paidAmount } = req.body;
    
    // Agar amount update ho raha hai, toh unpaidAmount phir se calculate karein
    if (totalAmount !== undefined || paidAmount !== undefined) {
      req.body.unpaidAmount = (totalAmount || 0) - (paidAmount || 0);
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id, 
      { $set: req.body }, 
      { new: true, runValidators: true }
    );
    
    if (!updatedOrder) return res.status(404).json({ message: "Order update nahi ho paya" });
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 5. DELETE: Remove Order
router.delete("/:id", async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) return res.status(404).json({ message: "Order delete nahi ho saka" });
    res.json({ message: "Order successfully delete ho gaya hai" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
