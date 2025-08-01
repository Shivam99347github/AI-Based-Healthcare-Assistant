const mongoose = require('mongoose');

const CheckoutProductSchema = new mongoose.Schema(
  {
    items: [
      {
        id: Number,
        name: String,
        price: Number,
        quantity: Number,
        image: String,
      },
    ],
    totalAmount: Number,
  },
  { timestamps: true } // adds createdAt and updatedAt fields
);

module.exports = mongoose.model('CheckoutProduct', CheckoutProductSchema);
