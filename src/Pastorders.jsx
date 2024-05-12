import React, { useState, useEffect } from 'react';
import ggImage from '../assets/gg.png';
import { Link } from 'react-router-dom';




export default function PastOrders() {
  const [orderId, setOrderId] = useState('123456');
  const [orderStatus, setOrderStatus] = useState('');

  useEffect(() => {
    trackOrder();
  }, []);

  const trackOrder = () => {

    const fakeOrderStatus = getOrderStatusFromBackend(orderId);
    setOrderStatus(fakeOrderStatus);
  };

  const getOrderStatusFromBackend = (orderId) => {
    // Here you would make a request to your backend to fetch the order status

    return 'In Transit, arriving in 30 mins';
  };

  return (
    <div className="order-tracking-container">
      <header style={{ padding: '10px' }}>
        <img src={ggImage} alt="gg logo" style={{}} />

        {/* <h1 style={{ marginLeft: '75px' }}>Review Donor Submissions</h1> */}
        <Link className='button-primary2' to="/donorhome">Donor Dashboard</Link>
      </header>
      <h1>Order Tracking</h1>
      <div className="order-status">
        <h2>Order Status:</h2>
        <p>{orderStatus}</p>
      </div>
    </div>
  );
}
