import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar, Line } from 'react-chartjs-2';
import ggImage from '../assets/ggw.png';
import goodImage from '../assets/good.png';
import avImage from '../assets/img_avatar.png';
import * as data from './data.js';
import statsd from '../assets/statsd.png';
import top from '../assets/top.png';


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
          <p style={{ textAlign: 'center' }}>Donor</p>

          <ul style={{ marginTop: '-5px' }}>
            <li>
              <Link className="sidebar-button" onClick={toggleView} >
                            View
                        </Link>
              {viewOpen && (
                <ul>
                  <li><Link to="/Requests">View Requests</Link></li>
                  <li><Link to="/ViewOrgsDonor">View Organizations List</Link></li>
                 
                </ul>
              )}
            </li>
            <Link to="/Pastorders" className="sidebar-button" style={{ marginTop: '15px' }}>Past orders</Link>
            <Link to="/UpdateAccDonor" className="sidebar-button" style={{ marginTop: '15px' }}>Update account</Link>
            <Link to="/" className="sidebar-button" style={{ marginTop: '15px' }}>Delete account</Link>
          </ul>

          <Link to="/" className="sidebar-button" style={{ marginTop: '15px' }}>Log Out</Link>
        </div>

        <div className="contentt" style={{}}>
                <div className="text-content">
                <h2 style={{ textAlign: 'left' }}>Donor Dashboard</h2>

                    <div style={{display: 'flex'}}>
                    <img src={statsd} style={{ height: '125px', marginRight: '-450px' }} />
                    <img src={top} style={{ height: '200px', paddingLeft: '800px',}} />

                    </div>

                    <div className="chart-container" style={{ width: '100%' }}>
                        <Line style={{width: '800px', marginLeft: '150px' }}
                            data={{
                                labels: ["Hassan","Amira", "Nada","Welo","Lolo","Khello"],
                                datasets: [{
                                    label: "Donors' Performance",
                                    data: [10, 10,40,50,20,40],
                                }]
                            }}
                        />
                    </div>

                    {/* <p>Select an option from the sidebar to get started.</p> */}
                </div>
            </div>

        

              
      </div>
      

      
    
  );
}
