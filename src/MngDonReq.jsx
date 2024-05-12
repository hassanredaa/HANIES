import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submissionsDonData } from './data.js';

function MngDonReq() {
    const [submissions, setSubmissions] = useState(submissionsDonData);

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
                <h1>Manage Donors' Requests</h1>
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
                </table></div>

        </div>
    );
}

export default MngDonReq;
