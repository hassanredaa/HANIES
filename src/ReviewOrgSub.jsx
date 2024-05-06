import React, { useState } from 'react';
import { Link } from 'react-router-dom';




function ReviewOrgSub() {
    return (
        <div className="review-org-sub">
            <header>
                <h1>Review Organization Submissions</h1>
                <Link to="/admin">Back to Admin Dashboard</Link>
            </header>
            <table>
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
                                {/* Placeholder for actions like edit, approve, or delete */}
                                <button>Edit</button>
                                <button>Approve</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ReviewOrgSub;
