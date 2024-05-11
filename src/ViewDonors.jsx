import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { doctec } from './data.js'

export default function ViewDonors() {
    return (
        <div className="review-org-sub">
                        <header>
                <h1>View Donors List</h1>
                <Link to="/admin">Back to Admin Dashboard</Link>

            </header>

            <table style={{ marginTop: '110px' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Type</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {doctec.map(submission => (
                        <tr key={submission.id}>
                            <td>{submission.name}</td>
                            <td>{submission.gender}</td>
                            <td>{submission.type}</td>
                            <td>{submission.email}</td>
                            <td>{submission.phone}</td>
                            <td>{submission.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}