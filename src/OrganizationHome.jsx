// OrganizationHome.jsx
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import ggImage from '../assets/ggw.png';
import goodImage from '../assets/good.png';
import avImage from '../assets/img_avatar.png';
import * as data from './data.js';
import { DataContext } from './data.jsx';

export default function OrganizationHome() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="h2">
            <h2>Organization</h2>
            <div className="sidebar">
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: '33.33%', padding: '5px', marginLeft: '20px' }}>
                        {/* Placeholder images */}
                        <img src={ggImage} alt="ggImage" />
                    </div>
                    <div style={{ flex: '33.33%', padding: '5px', marginRight: '200px' }}>
                        {/* Placeholder images */}
                        <img src={goodImage} alt="goodImage" />
                    </div>
                </div>
                <div>
                    {/* Placeholder image */}
                    <img src={avImage} alt="avImage" style={{ marginLeft: '5px', marginTop: '50px', borderRadius: '50%', width: '100px', height: '100px' }} />
                </div>
                <h1 style={{ textAlign: 'center', padding: '5px' }}>name</h1>
                <p style={{ textAlign: 'center' }}>Organization</p>

                <ul style={{ paddingTop: '20px' }}>
                    <li>
                        {/* Use Link component with correct class name */}
                        <Link to="/AboutOrg" className="button-primary">
                            About Us
                        </Link>
                    </li>
                </ul>
                {/* Changed Link path */}
                <Link to="/logout" style={{ marginTop: '170px' }}>Log Out</Link>
            </div>
        </div>
    );
}
