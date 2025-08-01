import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table } from 'react-bootstrap';
import NavigationBar from '../components/Navbar';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cart')
      .then(res => setCartItems(res.data))
      .catch(err => console.error('Error loading cart:', err));
  }, []);

  return (
    <>
      <NavigationBar />
      <Container className="my-5">
        <h2>Your Cart</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.size}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default CartPage;
