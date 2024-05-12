import React from 'react';
import { Link } from 'react-router-dom';
import { doctec } from './data.js';
import ggImage from '../assets/gg.png';

function ReviewDonSub() {
    const handleDownload = () => {
        // Initiate download of DF.docx
        const link = document.createElement('a');
        link.href = DFDocx;
        link.setAttribute('download', 'DF.docx');
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div className="review-org-sub">
            <header style={{ padding: '10px' }}>
                <img src={ggImage} alt="gg logo" style={{}} />
                <h1 style={{ marginLeft: '75px' }}>Review Donor Submissions</h1>
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
                            <th>Actions</th>

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
                                <td style={{ minWidth: '200px' }}>

                                    <div className="download">
                                        {/* <button
                                            style={{ marginTop: '6px' }}
                                            className="download"
                                            onClick={() => handleDownload(submission, `${submission.name}.json`)}
                                        >
                                            Download Data
                                        </button> */}
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
                                        }} href='../assets/DF.docx' download="DF.docx"> Download </a>                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ReviewDonSub;
