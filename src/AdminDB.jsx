import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar, Line } from 'react-chartjs-2';
import ggImage from '../assets/ggw.png';
import goodImage from '../assets/good.png';
import avImage from '../assets/img_avatar.png';
import * as data from './data.js';
import stats from '../assets/stats.png'
import top from '../assets/top.png'


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
                <div >
                    <div style={{ marginRight: '300px' }}>
                        <img src={ggImage} />
                    </div>
                    {/* <div style={{ flex: '33.33%', padding: '5px', marginRight: '200px' }}>
                        <img src={goodImage} />
                    </div> */}
                </div>
                <div>
                    <img src={avImage} style={{ marginLeft: '5px', borderRadius: '50%', width: '100px', height: '100px' }} />
                </div>
                <h1 style={{ textAlign: 'center' }}>Amira & Hassan</h1>

                <ul style={{ marginTop: '-5px' }}>
                    <li>
                        <Link className="sidebar-button" onClick={toggleReview}>
                            Review Submissions
                        </Link>

                        {reviewOpen && (
                            <ul>
                                <li><Link to="/submissions/organizations">Review Organization Submissions</Link></li>
                                <li><Link to="/submissions/donors">Review Donor Submissions</Link></li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link className="sidebar-button" onClick={toggleManage} >
                            Manage Requests
                        </Link>
                        {manageOpen && (
                            <ul>
                                <li><Link to="/requests/organizations">Manage Organization Requests</Link></li>
                                <li><Link to="/requests/donors">Manage Donor Requests</Link></li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link className="sidebar-button" onClick={toggleView} >
                            View
                        </Link>
                        {viewOpen && (
                            <ul>
                                <li><Link to="/views/organizations">View Organizations List</Link></li>
                                <li><Link to="/views/donors">View Donors List</Link></li>
                                <li></li>

                            </ul>
                        )}
                    </li>
                    <li>
                        <Link to="/delete" className="sidebar-button"  >
                            Delete Account
                        </Link>
                    </li>
                </ul>
                <Link to="/" style={{ marginTop: '15px' }}>Log Out</Link>
            </div>

            <div className="contentt" style={{}}>
                <div className="text-content">
                <h1 style={{ textAlign: 'left' }}>Dashboard</h1>

                    <div style={{display: 'flex'}}>
                    <img src={stats} style={{ height: '125px', marginRight: '-450px' }} />
                    <img src={top} style={{ height: '200px', paddingLeft: '800px',}} />

                    </div>

                    <div className="chart-container" style={{ width: '100%' }}>
                        <Line style={{width: '800px', marginLeft: '150px' }}
                            data={{
                                labels: ["Hassan","Amira", "Nada","Welo","Lolo","Khello"],
                                datasets: [{
                                    label: "takyeem",
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