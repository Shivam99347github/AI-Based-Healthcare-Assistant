// backend/routes/cart.js
const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// POST /api/cart/add - Add a product to cart
router.post('/add', async (req, res) => {
  try {
    const { name, price, image, description, quantity = 1 } = req.body;

    if (!name || !price || !image || !description) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const existingItem = await Cart.findOne({ name });

    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      return res.status(200).json({ message: 'Updated quantity in cart' });
    }

    const newCartItem = new Cart({ name, price, image, description, quantity });
    await newCartItem.save();
    res.status(201).json({ message: 'Product added to cart' });

  } catch (err) {
    console.error('Error adding to cart:', err);
    res.status(500).json({ message: 'Failed to add to cart' });
  }
});

// GET /api/cart - Fetch all cart items
router.get('/', async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.status(200).json(cartItems);
  } catch (err) {
    console.error('Error fetching cart:', err);
    res.status(500).json({ message: 'Failed to fetch cart items' });
  }
});

module.exports = router;
