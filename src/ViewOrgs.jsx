import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { orgs } from './data.js';
import MyLocationMap from './Location.jsx';
import { api } from './api.js';

export default function ViewOrgs() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCriteria, setFilterCriteria] = useState({
        area: '',
        governorate: '',
        organizationType: '',
    });
    const [selectedOrg, setSelectedOrg] = useState(null); // State to track selected org

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterCriteria(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const filteredOrgs = orgs.filter(org => (
        (org.organizationName.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (filterCriteria.area === '' || org.area.includes(filterCriteria.area)) &&
        (filterCriteria.governorate === '' || org.governorate.includes(filterCriteria.governorate)) &&
        (filterCriteria.organizationType === '' || org.organizationType === filterCriteria.organizationType)
    ));

    const handleViewLocation = (org) => {
        setSelectedOrg(org); // Set selected org to trigger MyLocationMap rendering
    };

    return (
        <div className="review-org-sub">
            <header>
                <h1>View Organization List</h1>
                <Link to="/admin">Back to Admin Dashboard</Link>
            </header>

            <div className="search-container" style={{ marginTop: '100px' }}>
                <input type="text" placeholder="Search by organization name" value={searchQuery} onChange={handleSearchChange} />
            </div>

            <div className="filter-container">
                <select name="area" value={filterCriteria.area} onChange={handleFilterChange}>
                    <option value="">Select Area</option>
                    <option value="Giza">Giza</option>
                    <option value="Dokki">Dokki</option>
                    <option value="Maadi">Maadi</option>
                    <option value="Zamalek">Zamalek</option>
                    {/* Add options dynamically */}
                </select>
                <select name="governorate" value={filterCriteria.governorate} onChange={handleFilterChange}>
                    <option value="">Select Governorate</option>
                    <option value="Cairo">Cairo</option>
                    {/* Add more options if needed */}
                </select>
                <select name="organizationType" value={filterCriteria.organizationType} onChange={handleFilterChange}>
                    <option value="">Select Organization Type</option>
                    <option value="Profit">Profit</option>
                    <option value="Non-Profit">Non-Profit</option>
                    {/* Add more options if needed */}
                </select>
            </div>

            <div className="table-wrapper" >
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
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrgs.map((submission, index) => (
                            <tr key={index}>
                                <td>{submission.name}</td>
                                <td>{submission.organizationName}</td>
                                <td>{submission.organizationType}</td>
                                <td>{submission.gender}</td>
                                <td>{submission.email}</td>
                                <td>{submission.phone}</td>
                                <td>{submission.area}</td>
                                <td>{submission.governorate}</td>
                                <td style={{ minWidth: '300px' }}>
                                    <button onClick={() => handleViewLocation(submission)}>View Location</button>
                                    {/* Conditionally render MyLocationMap within the cell */}
                                    {selectedOrg === submission && <MyLocationMap apiKey={api} org={selectedOrg} style={{ display: 'inline-block', width: '100%' }} />}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table></div>
        </div>
    );
}