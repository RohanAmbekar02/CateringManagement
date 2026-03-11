const express = require("express");
const router = express.Router();
const Order = require("../Models/order");
const Item = require("../Models/item");
const Customer = require("../Models/customer");


router.post("/", async (req, res) => {
  try {
   
    const { customer, items, date, paidAmount, totalAmount } = req.body;


    const customerFromDB = await Customer.findById(customer);
    if (!customerFromDB) {
      return res.status(404).json({ message: "Customer not found" });
    }


    const populatedItems = await Promise.all(
      items.map(async (i) => {
        const itemFromDB = await Item.findById(i.itemId);
        if (!itemFromDB) throw new Error("Item not found");
        
        return {
          itemId: itemFromDB._id,
          name: itemFromDB.itemname || itemFromDB.name,
          price: i.price,
          qty: i.qty,
          total: i.price * i.qty
        };
      })
    );

    const unpaidAmount = totalAmount - paidAmount;

    const order = new Order({
      customer: customerFromDB._id, 
      date: date,                   
      items: populatedItems,
      totalAmount: totalAmount,     
      paidAmount: paidAmount,
      unpaidAmount: unpaidAmount
    });

    await order.save(); 
    res.status(201).json(order);

  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("customer").sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: "Order deleted" });
});

module.exports = router;
