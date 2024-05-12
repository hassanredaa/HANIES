import React from 'react';
import { Link } from 'react-router-dom';
import { submissionsDonData } from './data.js';
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
                                    <div>
                                        <button className="view">View Data</button>
                                    </div>
                                    <div className="download">
                                        {/* <button
                                            style={{ marginTop: '6px' }}
                                            className="download"
                                            onClick={() => handleDownload(submission, `${submission.name}.json`)}
                                        >
                                            Download Data
                                        </button> */}
                                        <a className="download" href='../assets/DF.docx' download="DF.docx"> Download </a>
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

export default ReviewDonSub;
