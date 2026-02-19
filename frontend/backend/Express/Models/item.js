const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    itemname: { type: String, required: true, trim: true },
    itemprice: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', itemSchema);