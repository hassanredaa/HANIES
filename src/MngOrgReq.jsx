import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submissionsData } from './data.js';
import ggImage from '../assets/gg.png';


function MngOrgReq() {
    const [submissions, setSubmissions] = useState(submissionsData);

    const handleApprove = (id) => {
        const updatedSubmissions = submissions.map(sub => {
            if (sub.id === id) {
                return { ...sub, status: "Approved" };
            }
            return sub;
        });
        setSubmissions(updatedSubmissions);
    };

    const handleReject = (id) => {
        const updatedSubmissions = submissions.map(sub => {
            if (sub.id === id) {
                return { ...sub, status: "Rejected" };
            }
            return sub;
        });
        setSubmissions(updatedSubmissions);
    };

    return (
        <div className="review-org-sub">
            <header>
                <img src={ggImage} alt="gg logo" style={{}} />
                <h1>Manage Organizations' Requests</h1>
                <Link className='button-primary2' to="/admin">Admin Dashboard</Link>
            </header>
            <div className="table-wrapper" style={{ paddingTop: '100px' }}>
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.map(submission => (
                            <tr key={submission.id}>
                                <td>{submission.id}</td>
                                <td>{submission.name}</td>
                                <td>{submission.status}</td>
                                <td>
                                    <div>
                                        <button className="view" onClick={() => handleApprove(submission.id)}>Approve</button>

                                    </div>
                                    <div>
                                        <button className="download" style={{ marginTop: '6px' }} onClick={() => handleReject(submission.id)}>Reject</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>


        </div>
    );
}

export default MngOrgReq;
