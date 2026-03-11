const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  // Frontend se sirf selectedCustomer ki ID aa rahi hai
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  
  // Frontend 'date' bhej raha hai
  date: { type: Date, required: true },

  items: [{
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
    qty: { type: Number, required: true },
    price: { type: Number, required: true }
  }],

  // Frontend 'totalAmount' bhej raha hai
  totalAmount: { type: Number, required: true },
  paidAmount: { type: Number, default: 0 },
  unpaidAmount: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
