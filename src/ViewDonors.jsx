import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { doctec } from './data.js'
import ggImage from '../assets/gg.png';


export default function ViewDonors() {
    return (
        <div className="review-org-sub">
            <header>
                <img src={ggImage} alt="gg logo" style={{}} />

                <h1 style={{ marginLeft: '75px' }}>View Donors List</h1>
                <Link className='button-primary2' to="/admin">Admin Dashboard</Link>

            </header>
            <div className="table-wrapper" style={{ paddingTop: '100px' }}>
                <table className="fl-table">
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


        </div>
    )
}