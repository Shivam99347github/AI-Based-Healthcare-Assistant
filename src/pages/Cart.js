// src/pages/Cart.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../pages/Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/cart');
      setCartItems(res.data);
    } catch (err) {
      console.error('Failed to fetch cart items:', err);
    }
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleCheckout = async () => {
  try {
    const res = await axios.post('http://localhost:5000/api/checkout', {
      cartItems, // send cart items to backend
    });
    alert(res.data.message);
    setCartItems([]); // clear cart on UI
  } catch (err) {
    console.error('Checkout error:', err.response?.data || err.message);
    alert('Checkout failed');
  }
};


  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.image} alt={item.name} width="100" />
              <div>
                <h4>{item.title}</h4>
                <p>₹{item.price} × {item.quantity}</p>
              </div>
            </div>
          ))}

          <hr />
          <h3>Total: ₹{getTotal()}</h3>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
