import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import ggImage from '../assets/ggw.png';
import goodImage from '../assets/good.png';
import avImage from '../assets/img_avatar.png';
import * as data from './data.js';

data.set('hfh')
export default function AdminDB() {

    // State to manage the toggles
    const [viewOpen, setViewOpen] = useState(false);
    const [manageOpen, setManageOpen] = useState(false);
    const [reviewOpen, setReviewOpen] = useState(false);

    // Toggle functions
    const toggleView = () => setViewOpen(!viewOpen);
    const toggleManage = () => setManageOpen(!manageOpen);
    const toggleReview = () => setReviewOpen(!reviewOpen);

    return (
        <div className="admin-dashboard">
            
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
                <p style={{ textAlign: 'center' }}>Admin</p>

                <ul style={{ paddingTop: '20px' }}>
                    <li>
                        <button className="sidebar-button" onClick={toggleReview}>
                            Review Submissions
                        </button>

                        {reviewOpen && (
                            <ul>
                                <li><Link to="/submissions/organizations">Review Organization Submissions</Link></li>
                                <li><Link to="/submissions/donors">Review Donor Submissions</Link></li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <button className="sidebar-button" onClick={toggleManage} >
                            Manage Requests
                        </button>
                        {manageOpen && (
                            <ul>
                                <li><Link to="/requests/organizations">Manage Organization Requests</Link></li>
                                <li><Link to="/requests/donors">Manage Donor Requests</Link></li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <button className="sidebar-button" onClick={toggleView} >
                            View
                        </button>
                        {viewOpen && (
                            <ul>
                                <li><Link to="/views/organizations">View Organizations List</Link></li>
                                <li><Link to="/views/donors">View Donors List</Link></li>
                                <li></li>
                            </ul>
                        )}
                    </li>
                </ul>
                <Link to="/" style={{ marginTop: '170px' }}>Log Out</Link>
            </div>
            
            <h1>{data.get() }</h1>
            <div className="contentt">
                <div className="text-content">
                    <h1 style={{ textAlign: 'left' }}>Dashboard</h1>
                    {/* <p>Select an option from the sidebar to get started.</p> */}
                </div>
                <div className="chart-container">
                    <Bar
                        data={{
                            labels: ["Amira", "Hassan"],
                            datasets: [{
                                label: "takyeem",
                                data: [10, 30],
                            }]
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
