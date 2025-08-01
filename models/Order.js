const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      price: Number,
      image: String,
      description: String,
      quantity: Number,
    }
  ],
}, { timestamps: true }); // ✅ this adds createdAt

module.exports = mongoose.model('Order', orderSchema);
