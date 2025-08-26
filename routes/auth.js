const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'yourSecretKeyHere';

// ----------------------
// @route   POST /api/auth/register
// @desc    Register new user
// ----------------------
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  console.log('📩 Register attempt:', req.body);

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Please fill in all fields' });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log('⚠️ User already exists');
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();
    console.log('✅ Registered user:', newUser.email);

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    console.error('❌ Registration error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ----------------------
// @route   POST /api/auth/login
// @desc    Login user and return JWT token
// ----------------------
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('🔐 Login attempt:', email);

  if (!email || !password) {
    return res.status(400).json({ error: 'Please provide email and password' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.log('❌ No such user');
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('❌ Wrong password');
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { id: user._id },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    console.error('❌ Login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
