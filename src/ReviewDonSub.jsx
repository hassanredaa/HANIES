import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submissionsDonData } from './data.js'

function ReviewDonSub() {
    return (
        <div className="review-org-sub">
            <header style={{padding: '10px'}}>
                <h1>Review Donor Submissions</h1>
                <Link to="/admin">Back to Admin Dashboard</Link>
            </header>
            <table style={{marginTop: '110px'}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {submissionsDonData.map(submission => (
                        <tr key={submission.id}>
                            <td>{submission.id}</td>
                            <td>{submission.name}</td>
                            <td>{submission.status}</td>
                            <td>
                                <button className="edit">Edit</button>
                                <button className="approve">Approve</button>
                                <button className="delete">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ReviewDonSub;
