import React from 'react';
import { Link } from 'react-router-dom';

export default function Notifications() {
  const notifications = [
    { id: 1, message: 'New Donor fulfilled a donation post', time: 'recently' },
    { id: 2, message: 'New Donor fulfilled a donation post', time: '5 minutes ago' },
    { id: 3, message: 'New Donor fulfilled a donation post', time: '10 minutes ago' },
    { id: 4, message: 'New Donor fulfilled a donation post', time: '15 minutes ago' },
    { id: 5, message: 'New Donor fulfilled a donation post', time: '20 minutes ago' }
  ];

  const handleNotificationClick = (notificationId) => {
    // Handle click action, such as redirecting to FullfilledPost page
    console.log(`Clicked on notification ${notificationId}`);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1>Notifications</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {notifications.map(notification => (
          <li key={notification.id} style={{ marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
            <Link to="/FullfilledPost" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ cursor: 'pointer' }} onClick={() => handleNotificationClick(notification.id)}>
                <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>{notification.message}</p>
                <p style={{ fontSize: '0.8em', color: '#666' }}>{notification.time}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


