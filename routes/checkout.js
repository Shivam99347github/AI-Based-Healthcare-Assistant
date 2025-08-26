const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart'); // ← Use the actual cart model
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  try {
    const cartItems = await Cart.find(); // ← Use correct model

    if (cartItems.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const order = new Order({
      items: cartItems.map(item => ({
        name: item.name,
        price: item.price,
        image: item.image,
        description: item.description,
        quantity: item.quantity,
      })),
    });

    await order.save();

    // Clear the cart after successful checkout
    await Cart.deleteMany();

    res.status(201).json({ message: 'Order placed successfully!', order });
  } catch (err) {
    console.error('Checkout error:', err);
    res.status(500).json({ message: 'Failed to place order' });
  }
});

module.exports = router;
