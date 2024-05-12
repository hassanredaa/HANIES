import React, { useState } from 'react';
import RequestTile from './RequestTile.jsx';
import { Link } from 'react-router-dom';

import { organizationRequests } from './data.js';
import ggImage from '../assets/gg.png';

const Request = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAgeFilter, setSelectedAgeFilter] = useState('');
  const [selectedGenderFilter, setSelectedGenderFilter] = useState('');
  const [selectedSeasonFilter, setSelectedSeasonFilter] = useState('');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState('');
  const [selectedToyFilter, setSelectedToyFilter] = useState('');
  const [selectedHospitalFilter, setSelectedHospitalFilter] = useState('');
  const [selectedGovernorateFilter, setSelectedGovernorateFilter] = useState('');
  const [selectedAreaFilter, setSelectedAreaFilter] = useState('');
  const [selectedMedicationUseFilter, setSelectedMedicationUseFilter] = useState('');

  const handleSearch = (event) => {
      setSearchTerm(event.target.value);
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
    // Reset filters when changing category
    setSelectedAgeFilter('');
    setSelectedGenderFilter('');
    setSelectedSeasonFilter('');
    setSelectedTypeFilter('');
    setSelectedToyFilter('');
    setSelectedHospitalFilter('');
    setSelectedGovernorateFilter('');
    setSelectedAreaFilter('');
    setSelectedMedicationUseFilter('');
  };


  const handleAgeFilterChange = (event) => {
    setSelectedAgeFilter(event.target.value);
  };

  const handleGenderFilterChange = (event) => {
    setSelectedGenderFilter(event.target.value);
  };
  const handleSeasonFilterChange = (event) => {
    setSelectedSeasonFilter(event.target.value);
  };
  const handleTypeFilterChange = (event) => {
    setSelectedTypeFilter(event.target.value);
  };
  const handleToyFilterChange = (event) => {
    setSelectedToyFilter(event.target.value);
  };
  const handleHospitalFilterChange = (event) => {
    setSelectedHospitalFilter(event.target.value);
  };
  const handleGovernorateFilterChange = (event) => {
    setSelectedGovernorateFilter(event.target.value);
  };
  const handleAreaFilterChange = (event) => {
    setSelectedAreaFilter(event.target.value);
  };
  const handleMedicationUseFilterChange = (event) => {
    setSelectedMedicationUseFilter(event.target.value);
  };


  const renderRequests = () => {
    let requestsToRender = [];

    if (selectedCategory === 'all') {
      requestsToRender = Object.values(organizationRequests).flat();
    } else {
      requestsToRender = organizationRequests[selectedCategory] || [];
    }

    // Apply additional filters based on selectedCategory
    if (selectedCategory === 'clothes') {
      if (selectedAgeFilter !== '') {
        requestsToRender = requestsToRender.filter(request => request.age === selectedAgeFilter);
      }
      if (selectedGenderFilter !== '') {
        requestsToRender = requestsToRender.filter(request => request.gender === selectedGenderFilter);
      }
      if (selectedSeasonFilter !== '') {
        requestsToRender = requestsToRender.filter(request => request.season === selectedSeasonFilter);
      }
    }else if (selectedCategory === 'toys'){
      if (selectedAgeFilter !== '') {
        requestsToRender = requestsToRender.filter(request => request.age === selectedAgeFilter);
      }
      if (selectedGenderFilter !== '') {
        requestsToRender = requestsToRender.filter(request => request.gender === selectedGenderFilter);
      }
      if(selectedToyFilter !== ''){
        requestsToRender = requestsToRender.filter(request => request.toy_category === selectedToyFilter);
      }

    }else if (selectedCategory === 'schoolSupplies'){
      if(selectedTypeFilter !== ''){
        requestsToRender = requestsToRender.filter(request => request.type === selectedTypeFilter);
      }
    }else if (selectedCategory === 'food'){
      if(selectedTypeFilter !== ''){
        requestsToRender = requestsToRender.filter(request => request.type === selectedTypeFilter);
      }
    }else if (selectedCategory === 'bloodDonations'){
      if(selectedHospitalFilter !== ''){
        requestsToRender = requestsToRender.filter(request => request.hospital === selectedHospitalFilter);
      }
      if(selectedGovernorateFilter !== ''){
        requestsToRender = requestsToRender.filter(request => request.governorate === selectedGovernorateFilter);
      }
      if(selectedAreaFilter !== ''){
        requestsToRender = requestsToRender.filter(request => request.area === selectedAreaFilter);
      }
    }else if (selectedCategory === 'medicalSupplies'){
      if(selectedTypeFilter !== ''){
        requestsToRender = requestsToRender.filter(request => request.type === selectedTypeFilter);
      }
      if(selectedMedicationUseFilter !== ''){
        requestsToRender = requestsToRender.filter(request => request.medication_use === selectedMedicationUseFilter);
      }
    }
    if (searchTerm !== '') {
      requestsToRender = requestsToRender.filter(request => request.category.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    
    

    return requestsToRender.map((request, index) => (
      <RequestTile key={index} {...request} />
    ));
  };

  return (
    <div >
       <header style={{ padding: '10px' }}>
                <img src={ggImage} alt="gg logo" style={{}} />
                <h1 style={{ marginLeft: '75px' }}>Requests</h1>
                <Link className='button-primary2' to="/teacherhome">Teacher Dashboard</Link>
            </header>
      <div style={{paddingTop:'150px'}} >
        <button className='button-primary2' onClick={() => handleFilter('all')}>All</button>
        <button className='button-primary2' onClick={() => handleFilter('clothes')}>Clothes</button>
        <button className='button-primary2' onClick={() => handleFilter('food')}>Food</button>
        <button className='button-primary2' onClick={() => handleFilter('toys')}>Toys</button>
        <button className='button-primary2' onClick={() => handleFilter('schoolSupplies')}>School Supplies</button>
        <button className='button-primary2' onClick={() => handleFilter('medicalSupplies')}>Medical Supplies</button>
        <button className='button-primary2'onClick={() => handleFilter('bloodDonations')}>Blood Donations</button>
      </div>
      <div>         
      <input style={{marginTop:'20px'}} type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
      </div>
      
      {selectedCategory === 'clothes' && (
        <div className="filter-options">
          <select value={selectedAgeFilter} onChange={handleAgeFilterChange}>
            <option value="">Select Age</option>
            <option value="Child">Child</option>
            <option value="Adult">Adult</option>
          </select>
          <select value={selectedGenderFilter} onChange={handleGenderFilterChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unisex">Unisex</option>
          </select>
          <select value={selectedSeasonFilter} onChange={handleSeasonFilterChange}>
            <option value="">Select Season</option>
            <option value="Winter">Winter</option>
            <option value="Summer">Summer</option>
            <option value="Spring">Spring</option>
            <option value="Autumn">Autumn</option>
            </select>
        </div>
      )}
      {selectedCategory === 'toys' && (
        <div className="filter-options">
          <select value={selectedAgeFilter} onChange={handleAgeFilterChange}>
            <option value="">Select Age</option>
            <option value="Child">Child</option>
            <option value="Adult">Adult</option>
          </select>
          <select value={selectedGenderFilter} onChange={handleGenderFilterChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unisex">Unisex</option>
          </select>
          <select value={selectedToyFilter} onChange={handleToyFilterChange}>
          <option value="">Select Toy Category</option>
          <option value="board games">Board Games</option>
          <option value="stuffed toys">Stuffed Toys</option>
          <option value="dolls">Dolls</option>
          <option value="sports">Sports</option>
          <option value="cars">Cars</option>
          <option value="outdoor">Outdoor</option>
            </select>
        </div>
      )}
      {selectedCategory === 'schoolSupplies' && (
        <div className="filter-options">
        <select value={selectedTypeFilter} onChange={handleTypeFilterChange}>
        <option value="">Select Type</option>
        <option value="Books">Books</option>
        <option value="Stationary">Stationary</option>
        </select>
        </div>

      )}
      {selectedCategory === 'food' && (
        <div className="filter-options">
        <select value={selectedTypeFilter} onChange={handleTypeFilterChange}>
        <option value="">Select Type</option>
        <option value="fruits and vegetables">Fruits and Vegetables</option>
        <option value="canned foods">Canned Foods</option>
        <option value="fresh meals">Fresh Meals</option>
        <option value="baked goods">Baked Goods</option>
        </select>
        </div>

      )}
      {selectedCategory === 'bloodDonations'&&(
        <div className="filter-options">
        <select value={selectedHospitalFilter} onChange={handleHospitalFilterChange}>
        <option value="">Select Hospital</option>
        <option value="el hayat">El Hayat</option>
        <option value="cleopatra">Cleopatra</option>
        <option value="seoudi german">Seoudi German</option>
        </select>
        <select value={selectedGovernorateFilter} onChange={handleGovernorateFilterChange}>
        <option value="">Select Governorate</option>
        <option value="cairo">Cairo</option>
        <option value="giza">Giza</option>
        <option value="alexandria">Alexandria</option>
        </select>
        <select value={selectedAreaFilter} onChange={handleAreaFilterChange}>
        <option value="">Select Area</option>
        <option value="heliopolis">Heliopolis</option>
        <option value="el agouza">El Agouza</option>
        <option value="sporting">Sporting</option>
        </select>
        </div>
      )}
      {selectedCategory === 'medicalSupplies' && (
        <div className="filter-options">
        <select value={selectedTypeFilter} onChange={handleTypeFilterChange}>
        <option value="">Select Type</option>
        <option value="devices">Devices</option>
        <option value="equipment">Equipment</option>
        <option value="medication">Medication</option>
        </select>
        {selectedTypeFilter === 'medication' && (
            
                
                <select value={selectedMedicationUseFilter} onChange={handleMedicationUseFilterChange}>
                    <option value="">Select Medication Use</option>
                    <option value="pain relief">Pain Relief</option>
                    <option value="antibiotics">Antibiotics</option>
                    <option value="cardiac">Cardiac</option>
                </select>
            
        )}
        </div>

      )}
      <div className="requests-container">
      {renderRequests()}

      </div>
    </div>
    
  );
}

export default Request;
