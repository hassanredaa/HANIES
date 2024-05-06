import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


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
                <ul>
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
                                <li><Link to="/views/registered">View Registered Organizations</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            <div className="content">
                <div className="text-content">
                    <h1>Welcome to the Admin Dashboard</h1>
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
