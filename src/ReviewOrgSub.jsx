import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { orgs } from './data.js'
import ggImage from '../assets/gg.png';


function ReviewOrgSub() {
    return (
        <div className="review-org-sub">
            <header style={{ position: 'relative' }}>
                <img src={ggImage} alt="gg logo" style={{}} />
                <h1 style={{ marginLeft: '75px' }}>Review Organization Submissions</h1>
                <Link className='button-primary2' to="/admin">Admin Dashboard</Link>

            </header>
            <div className="table-wrapper" style={{}}>
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Organization Name</th>
                            <th>Organization Type</th>
                            <th>Type</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Area</th>
                            <th>Governorate</th>
                            <th style={{ minWidth: '300px' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orgs.map(submission => (
                            <tr key={submission.id}>
                                <td>{submission.name}</td>
                                <td>{submission.organizationName}</td>
                                <td>{submission.organizationType}</td>
                                <td>{submission.gender}</td>
                                <td>{submission.email}</td>
                                <td>{submission.phone}</td>
                                <td>{submission.area}</td>
                                <td>{submission.governorate}</td>
                                <td>

                                    <div>
                                        <a style={{
                                            display: 'inline-block',
                                            padding: '6.5px 20px',
                                            marginTop: '10px',
                                            backgroundColor: '#4FC3A1',
                                            color: 'white',
                                            textDecoration: 'none',
                                            borderRadius: '5px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            textAlign: 'center',
                                            width: '90%',
                                            height: 'auto',
                                            lineHeight: 'inherit',
                                        }} href='../assets/DF.docx' download="DF.docx"> Download </a>
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
