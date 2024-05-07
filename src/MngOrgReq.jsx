import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submissionsData } from './data.js'

function ReviewOrgSub() {

    const [submissions, setSubmissions] = useState(submissionsData);

    // Function to approve a submission
    const handleApprove = (id) => {
        const updatedSubmissions = submissions.map(sub => {
            if (sub.id === id) {
                return { ...sub, status: "Approved" };
            }
            return sub;
        });
        setSubmissions(updatedSubmissions);
    };

    // Function to reject a submission
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
                <h1>Review Organization Submissions</h1>
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
                    {submissionsData.map(submission => (
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

export default ReviewOrgSub;
