// src/pages/ProductPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from '../components/Navbar';
import axios from 'axios';
import ReviewsSection from '../components/ReviewsSection';
import ImageGallery from '../components/ImageGallery';
import '../pages/ProductPage.css'; // This file contains our custom 


function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
        if (response.data.availableSizes.length > 0) {
          setSelectedSize(response.data.availableSizes[0]);
        }
      })
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <>
      <NavigationBar />
      <div className="product-page">
        <div className="product-container">
          <div className="image-section">
            <ImageGallery images={product.images} />
          </div>

          <div className="details-section">
            <h2>{product.name}</h2>
            <p>{product.fullDescription}</p>
            <h4>₹{product.price.toFixed(2)}</h4>

            <label htmlFor="size-select">Available Sizes:</label>
            <select
              id="size-select"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {product.availableSizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>

            <div className="button-social-section">
              <button className="add-to-cart-btn">Add to Cart</button>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-section">
          <ReviewsSection productId={product._id} reviews={product.reviews} />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
