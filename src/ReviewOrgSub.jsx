import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submissionsData } from './data.js'

function ReviewOrgSub() {
    return (
        <div className="review-org-sub">
            <header>
                <h1>Review Organization Submissions</h1>
                <Link className='button-primary2' to="/admin">Back to Admin Dashboard</Link>

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
                        {submissionsData.map(submission => (
                            <tr key={submission.id}>
                                <td>{submission.id}</td>
                                <td>{submission.name}</td>
                                <td>{submission.status}</td>
                                <td>
                                    <div>
                                        <button className="view">View Data</button>
                                    </div>
                                    <div>
                                        <button style={{ marginTop: '6px' }} className="download">Download Data</button>
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

export default ReviewOrgSub;
