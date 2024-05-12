import React, { useState } from 'react';
import RequestTile from './RequestTile.jsx';
import { organizationRequests } from './data.js';

const Request = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const renderRequests = () => {
    let requestsToRender = [];

    if (selectedCategory === 'all') {
      requestsToRender = Object.values(organizationRequests).flat();
    } else {
      requestsToRender = organizationRequests[selectedCategory] || [];
    }

    return requestsToRender.map((request, index) => (
      <RequestTile key={index} {...request} />
    ));
  };

  return (
    <div className='page-containerr'>
      <div className="category-buttons">
        <button onClick={() => handleFilter('all')}>All</button>
        <button onClick={() => handleFilter('clothes')}>Clothes</button>
        <button onClick={() => handleFilter('food')}>Food</button>
        <button onClick={() => handleFilter('toys')}>Toys</button>
        <button onClick={() => handleFilter('schoolSupplies')}>School Supplies</button>
        <button onClick={() => handleFilter('stationary')}>Stationary</button>
        <button onClick={() => handleFilter('medicalSupplies')}>Medical Supplies</button>
        <button onClick={() => handleFilter('bloodDonations')}>Blood Donations</button>
      </div>
      {renderRequests()}
    </div>
  );
}

export default Request;
