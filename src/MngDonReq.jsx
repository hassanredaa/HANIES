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
                <Link to="/admin">Back to Admin Dashboard</Link>
            </header>
            <table style={{ marginTop: '110px' }}>
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
                                <button className="edit">Edit</button>
                                <button className="approve" onClick={() => handleApprove(submission.id)}>Approve</button>
                                <button className="delete" onClick={() => handleReject(submission.id)}>Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MngDonReq;
