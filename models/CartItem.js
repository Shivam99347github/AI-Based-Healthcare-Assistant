const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  productId: String,
  title: String,
  image: String,
  price: Number,
  quantity: { type: Number, default: 1 }
});

module.exports = mongoose.model('CartItem', CartItemSchema);
