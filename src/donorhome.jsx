import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ggImage from '../assets/ggw.png';
import goodImage from '../assets/good.png';
import avImage from '../assets/img_avatar.png';

export default function DonorHome() {
  // State to manage the toggles
  const [viewOpen, setViewOpen] = useState(false);


  // Toggle functions
  const toggleView = () => setViewOpen(!viewOpen);


  return (
    <div className="Donor-dashboard">

        <div className="sidebar">
          <div style={{ display: 'flex' }}>
            <div style={{ flex: '33.33%', padding: '5px', marginLeft: '20px' }}>
              <img src={ggImage} />
            </div>
            <div style={{ flex: '33.33%', padding: '5px', marginRight: '200px' }}>
              <img src={goodImage} />
            </div>
          </div>
          <div>
            <img src={avImage} style={{ marginLeft: '5px', marginTop: '50px', borderRadius: '50%', width: '100px', height: '100px' }} />
          </div>
          <h1 style={{ textAlign: 'center', padding: '5px' }}>name</h1>
          <p style={{ textAlign: 'center' }}>User</p>

          <ul style={{ paddingTop: '20px' }}>
            <li>
              <div className="p-3">
                <input type="text" id="search-input" placeholder="Menu Search..." className="form-control" />
              </div>

            </li>
            <li>
              <button className="sidebar-button" onClick={toggleView} >
                View
              </button>
              {viewOpen && (
                <ul>
                  <li><Link to="/Requests">View Requests</Link></li>
                  <li></li>
                </ul>
              )}
            </li>
          </ul>
          <Link to="/" style={{ marginTop: '170px' }}>Log Out</Link>
        </div>

        <h1 style={{ textAlign: 'left' }}>Welcome to Good Giving!</h1>
        <h2 style={{ textAlign: 'left' }}>This is a place where you can make a difference.</h2>

              
      </div>
      

      
    
  );
}
