import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submissionsData } from './data.js'

function ReviewOrgSub() {
    return (
        <div className="review-org-sub">
            <header>
                <h1>Review Organization Submissions</h1>
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
                    {submissionsData.map(submission => (
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

export default ReviewOrgSub;
