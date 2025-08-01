// src/components/ProductCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductCard.css'; // Import your CSS styles

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
      await axios.post('http://localhost:5000/api/cart/add', {
        productId: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        quantity: 1
      });

      navigate('/cart');
    } catch (err) {
      console.error('Error adding to cart:', err);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} width="150" />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
