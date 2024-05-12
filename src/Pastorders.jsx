import React, { useState, useEffect } from 'react';
//import './OrderTracking.css'; // Import CSS for styling

export default function PastOrders() {
  const [orderId, setOrderId] = useState('123456'); // Predefined order ID for demonstration
  const [orderStatus, setOrderStatus] = useState('');

  useEffect(() => {
    // Fetch order status immediately after component mounts
    trackOrder();
  }, []); // Empty dependency array ensures the effect runs only once after mounting

  const trackOrder = () => {
    // Here you would implement logic to fetch the order status from your backend
    // For demonstration purposes, let's assume the order status is fetched from an API
    // Replace this with your actual implementation
    const fakeOrderStatus = getOrderStatusFromBackend(orderId);
    setOrderStatus(fakeOrderStatus);
  };

  const getOrderStatusFromBackend = (orderId) => {
    // Here you would make a request to your backend to fetch the order status
    // For demonstration purposes, let's simulate a response
    // Replace this with your actual backend integration
    return 'In Transit, arriving in 30 mins';
  };

  return (
    <div className="order-tracking-container">
      <h1>Order Tracking</h1>
      <div className="order-status">
        <h2>Order Status:</h2>
        <p>{orderStatus}</p>
      </div>
    </div>
  );
}
