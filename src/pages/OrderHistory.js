import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/checkout")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Failed to fetch orders", err));
  }, []);

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Order History</h2>
      {orders.length === 0 ? (
        <p className="text-center">No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={order._id} className="mb-4 border p-3 rounded shadow-sm">
            <h5>Order #{orders.length - index}</h5>
            <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.id}>
                    <td><img src={item.image} alt={item.name} width="60" /></td>
                    <td>{item.name}</td>
                    <td>₹{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>₹{item.price * item.quantity}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="4" className="text-end fw-bold">Total:</td>
                  <td className="fw-bold">₹{order.totalAmount}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))
      )}
    </Container>
  );
}

export default OrderHistory;
