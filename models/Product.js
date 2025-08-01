const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
  category: String,
  size: [String]
});

module.exports = mongoose.model('Product', ProductSchema);
