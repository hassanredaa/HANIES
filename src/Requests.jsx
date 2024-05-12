import React, { useState } from 'react';

function FilterButton({ onClick, text }) {
    return (
        <button onClick={onClick}>{text}</button>
    );
}

export default function Requests() {
    const [filter, setFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDonation, setSelectedDonation] = useState(null);
    const [ageFilter, setAgeFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [seasonFilter, setSeasonFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [toyFilter, setToyFilter] = useState('');
    const [hospitalFilter, sethospitalFilter] = useState('');
    const [governorateFilter, setgovernorateFilter] = useState('');
    const [areaFilter, setareaFilter] = useState('');
    const [medicationUseFilter, setMedicationUseFilter] = useState('');
    const [donationQuantity, setDonationQuantity] = useState(1); // State for donation quantity

    const handleAgeFilterChange = (event) => {
        const value = event.target.value;
        setAgeFilter(value);
        handleFilter(value, 'age');
    };

    const handleGenderFilterChange = (event) => {
        const value = event.target.value;
        setGenderFilter(value);
        handleFilter(value, 'gender');
    };

    const handleSeasonFilterChange = (event) => {
        const value = event.target.value;
        setSeasonFilter(value);
        handleFilter(value, 'season');
    };
    const handleToyFilterChange = (event) => {
        const value = event.target.value;
        setToyFilter(value);
        handleFilter(value, 'toy_category');
    };
    const handlehospitalFilterChange = (event) => {
        const value = event.target.value;
        sethospitalFilter(value);
        handleFilter(value, 'hospital');
    };
    const handlegovernorateFilterChange = (event) => {
        const value = event.target.value;
        setgovernorateFilter(value);
        handleFilter(value, 'governorate');
    };
    const handleareaFilterChange = (event) => {
        const value = event.target.value;
        setareaFilter(value);
        handleFilter(value, 'area');
    };
    const handleMedicationUseFilterChange = (event) => {
        const value = event.target.value;
        setMedicationUseFilter(value);
        handleFilter(value, 'medication_use');
    };
    

    const handleTypeFilterChange = (event) => {
        const value = event.target.value;
        setTypeFilter(value);
        handleFilter(value, 'type');
    };

    const handleFilter = (filterValue, filterType) => {
        setFilter(filterValue);
        if (filterType === 'age') {
            setAgeFilter(filterValue);
        } else if (filterType === 'gender') {
            setGenderFilter(filterValue);
        } else if (filterType === 'season') {
            setSeasonFilter(filterValue);
        } else if (filterType === 'type') {
            setTypeFilter(filterValue);
        }else if (filterType === 'toy_category') {
            setToyFilter(filterValue);
        }else if (filterType === 'hospital') {
            sethospitalFilter(filterValue);
        }else if (filterType === 'governorate') {
            setgovernorateFilter(filterValue);
        }else if (filterType === 'area') {
            setareaFilter(filterValue);
        }else if (filterType === 'medication_use') {
            setMedicationUseFilter(filterValue);
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleDonationClick = (donation) => {
        setSelectedDonation(donation);
    };

    const handleSelectedDonationClose = () => {
        setSelectedDonation(null);
    };

    const handleQuantityChange = (event) => {
        setDonationQuantity(parseInt(event.target.value)); // Convert input value to integer
    };

    const filteredDonations = donations.filter(donation => {
        const categoryMatch = filter === '' || donation.category === filter;
        const ageMatch = ageFilter === '' || donation.age === ageFilter;
        const genderMatch = genderFilter === '' || donation.gender === genderFilter;
        const seasonMatch = seasonFilter === '' || donation.season === seasonFilter;
        const typeMatch = typeFilter === '' || donation.type === typeFilter;
        const toyMatch = toyFilter === '' || donation.toy_category === toyFilter; // Check against toy_category property
        const hospitalMatch = hospitalFilter === '' || donation.hospital === hospitalFilter;
        const governorateMatch = governorateFilter === '' || donation.governorate === governorateFilter;
        const areaMatch = areaFilter === '' || donation.area === areaFilter;
        const medicationUseMatch = medicationUseFilter === '' || donation.medication_use === medicationUseFilter;
        const searchTermMatch = searchTerm === '' || donation.name.toLowerCase().includes(searchTerm.toLowerCase()) || donation.category.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && ageMatch && genderMatch && seasonMatch && typeMatch && toyMatch && hospitalMatch && governorateMatch && areaMatch && medicationUseMatch && searchTermMatch;
    });
    

    return (
        <div>
            <h1>Donations</h1>
            <div>
                {/* Search input */}
                <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
            </div>

            <div>
                {/* Filter buttons */}
                <button className="button-primary" onClick={() => handleFilter('clothes')} >
                    Clothes
                </button>
                <button className="button-primary" onClick={() => handleFilter('toys')} >
                    Toys 
                </button>
                <button className="button-primary" onClick={() => handleFilter('food')} >
                    Food 
                </button>
                <button className="button-primary" onClick={() => handleFilter('school supplies')} >
                School Supplies 
                </button>
                <button className="button-primary" onClick={() => handleFilter('medical')} >
                    Medical 
                </button>
                <button className="button-primary" onClick={() => handleFilter('blood')} >
                    Blood 
                </button>
                <button className="button-primary" onClick={() => handleFilter('')} >
                    All 
                </button>

                {/* Add more filter buttons as needed */}

                {/* Additional filters for clothes */}
                {filter === 'clothes' && (
                    <div>
                        <label>
                            Age:
                            <select value={ageFilter} onChange={handleAgeFilterChange}>
                                <option value="">Any</option>
                                <option value="adult">Adult</option>
                                <option value="child">Child</option>
                            </select>
                        </label>
                        <label>
                            Gender:
                            <select value={genderFilter} onChange={handleGenderFilterChange}>
                                <option value="">Any</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="unisex">Unisex</option>
                            </select>
                        </label>
                        <label>
                            Season:
                            <select value={seasonFilter} onChange={handleSeasonFilterChange}>
                                <option value="">Any</option>
                                <option value="winter">Winter</option>
                                <option value="summer">Summer</option>
                                <option value="spring">Spring</option>
                                <option value="autumn">Autumn</option>
                            </select>
                        </label>
                    </div>
                )}
                {filter === 'school supplies' && (
                    <div>
                        <label>
                            Type:
                            <select value={typeFilter} onChange={handleTypeFilterChange}>
                                <option value="">Any</option>
                                <option value="books">Books</option>
                                <option value="stationary">Stationary</option>
                            </select>
                        </label>
                    </div>
                )}
                  {filter === 'toys' && (
                    <div>
                        <label>
                            Age:
                            <select value={ageFilter} onChange={handleAgeFilterChange}>
                                <option value="">Any</option>
                                <option value="teen">Teen</option>
                                <option value="child">Child</option>
                                <option value="baby">Baby</option>
                            </select>
                        </label>
                        <label>
                            Gender:
                            <select value={genderFilter} onChange={handleGenderFilterChange}>
                                <option value="">Any</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="unisex">Unisex</option>
                            </select>
                        </label>
                        <label>
                            Toy category:
                            <select value={toyFilter} onChange={handleToyFilterChange}>
                                <option value="">Any</option>
                                <option value="board games">Board Games</option>
                                <option value="stuffed toys">Stuffed Toys</option>
                                <option value="dolls">Dolls</option>
                                <option value="sports">Sports</option>
                                <option value="cars">Cars</option>
                                <option value="outdoor">Outdoor</option>
                            </select>
                        </label>
                    </div>
                )}
                {filter === 'food'&&(
                    <div>
                    <label>
                        Type:
                        <select value={typeFilter} onChange={handleTypeFilterChange}>
                            <option value="">Any</option>
                            <option value="fruits and vegetables">Fruits and Vegetables</option>
                            <option value="canned foods">Canned Foods</option>
                            <option value="fresh meals">Fresh Meals</option>
                            <option value="baked goods">Baked Goods</option>
                        </select>
                    </label>
                </div>
                )}
                {filter === 'blood' &&(
                    <div>
                        <label>
                        Hospital:
                        <select value={hospitalFilter} onChange={handlehospitalFilterChange}>
                            <option value="">Any</option>
                            <option value="el hayat">El Hayat</option>
                            <option value="cleopatra">Cleopatra</option>
                            <option value="seoudi german">Seoudi German</option>
                        </select>
                    </label>
                    <label>
                        Governorate:
                        <select value={governorateFilter} onChange={handlegovernorateFilterChange}>
                            <option value="">Any</option>
                            <option value="cairo">Cairo</option>
                            <option value="giza">Giza</option>
                            <option value="alexandria">Alexandria</option>
                        </select>
                    </label>
                    <label>
                        Area:
                        <select value={areaFilter} onChange={handleareaFilterChange}>
                            <option value="">Any</option>
                            <option value="heliopolis">Heliopolis</option>
                            <option value="el agouza">El Agouza</option>
                            <option value="sporting">Sporting</option>
                        </select>
                    </label>

                        </div>

                )}
                {filter === 'medical' &&(
                     <div>
                     <label>
                         Type:
                         <select value={typeFilter} onChange={handleTypeFilterChange}>
                             <option value="">Any</option>
                             <option value="devices">Devices</option>
                             <option value="equipment">Equipment</option>
                             <option value="medication">Medication</option>
                         </select>
                     </label>
                     {typeFilter === 'medication' && (
            <label>
                Medication Use:
                <select value={medicationUseFilter} onChange={handleMedicationUseFilterChange}>
                    <option value="">Any</option>
                    <option value="pain relief">Pain Relief</option>
                    <option value="antibiotics">Antibiotics</option>
                    <option value="cardiac">Cardiac</option>
                    {/* Add more options as needed */}
                </select>
            </label>
        )}
                 </div>

                )}
            </div>

            {selectedDonation && (
                <div>
                    {/* Display selected donation details */}
                    <h2>Selected Donation Details</h2>
                    {selectedDonation.category === 'clothes' && (
                        <>
                            <p>Type: {selectedDonation.type}</p>
                            <p>Material: {selectedDonation.material}</p>
                            <p>Age: {selectedDonation.age}</p>
                            <p>Gender: {selectedDonation.gender}</p>
                            <p>Season: {selectedDonation.season}</p>
                            <p>Quantity: {selectedDonation.quantity}</p>
                           
                        </>
                    )}
                    {selectedDonation.category === 'school supplies'&&selectedDonation.type === 'stationary'&&(
                        <>
                         <p>Type: {selectedDonation.stationarytype}</p>
                         <p>Quantity: {selectedDonation.quantity}</p>
                        </>
                        
                    )}
                     {selectedDonation.category === 'school supplies'&&selectedDonation.type === 'books'&&(
                         <>
                        
                        <p>Name: {selectedDonation.bookname}</p>
                        <p>Author: {selectedDonation.author}</p>
                        <p>Language: {selectedDonation.language}</p>
                        <p>Edition: {selectedDonation.edition}</p>
                        <p>Summary: {selectedDonation.summary}</p>
                        <p>Quantity: {selectedDonation.quantity}</p>

                        </>
                )}
                {selectedDonation.category === 'toys'&&(
                    <>
                     <p>Age: {selectedDonation.age}</p>
                     <p>Gender: {selectedDonation.gender}</p>
                     <p>Category: {selectedDonation.toy_category}</p>
                     <p>Quantity: {selectedDonation.quantity}</p>
                    </>
                )}
                {selectedDonation.category ==='food'&&(
                    <>
                    <p>Item Name: {selectedDonation.item_name}</p>
                     <p>Quantity: {selectedDonation.quantity} KG</p>
                    </>
                )}
                {selectedDonation.category ==='blood'&&(
                    <>
                     <p>Patient Name: {selectedDonation.name_of_patient}</p>
                     <p>Blood Type: {selectedDonation.type}</p>
                     <p>Hospital Name: {selectedDonation.hospital}</p>
                     <p>Hospital Area: {selectedDonation.area}</p>
                     <p>Hospital Governorate: {selectedDonation.governorate}</p>
                     <p>Hospital Address: {selectedDonation.address}</p>
                    </>
                )}
                {selectedDonation.category ==='medical' && selectedDonation.type === 'medication' &&(
                    <>
                    <p>Medication Use: {selectedDonation.medication_use}</p>
                    <p>Quantity: {selectedDonation.quantity}</p>
                    </>
                )}
                {selectedDonation.category === 'medical' && selectedDonation.type === 'devices' &&(
                    <>
                     <p>Device Type: {selectedDonation.device_type}</p>
                     <p>Quantity: {selectedDonation.quantity}</p>
                    </>
                )}
                {selectedDonation.category === 'medical' && selectedDonation.type === 'equipment' &&(
                    <>
                     <p>Equipment Type: {selectedDonation.equipment_type}</p>
                     <p>Quantity: {selectedDonation.quantity}</p>
                    </>
                )}

                    
                    <label>
                                Quantity:
                                <input type="number" value={donationQuantity} onChange={handleQuantityChange} min="1" max={selectedDonation.quantity} />
                            </label>
                    <button className="button-primary" onClick={handleSelectedDonationClose}>Close</button>
                </div>
            )}

            <div>
                {/* Display filtered donations in a table */}
                <table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDonations.map(donation => (
                            <tr key={donation.id} onClick={() => handleDonationClick(donation)}>
                                <td>{donation.category}</td>
                                <td>{donation.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <footer style={{ textAlign: 'center', padding: '20px 10px', backgroundColor: 'black', color: 'white' }}>
                <p>Copyright © 2023 Good Giving</p>
            </footer>
        </div>
    );
}

const donations = [
    { id: 1, name: 'Donation 1', category: 'clothes', age: 'adult', gender: 'male', season: 'winter', quantity: 10, type: 'Shirt', material: 'Cotton' },
    { id: 2, name: 'Donation 2', category: 'toys', age: 'child', gender: 'unisex', toy_category: 'dolls', quantity: 5 },
    { id: 3, name: 'Donation 3', category: 'food', type:'canned foods',item_name:'foul medames', quantity: 20 },
    { id: 4, name: 'Donation 4', category: 'clothes', age: 'child', gender: 'female', season: 'summer', quantity: 15, type: 'Dress', material: 'Polyester' },
    { id: 5, name: 'Donation 5', category: 'toys', age: 'any', gender: 'unisex', toy_category: 'cars', quantity: 8 },
    { id: 6, name: 'Donation 6', category: 'school supplies', type:'books' ,bookname:'harry potter',author:'jk rowling',language:'english',edition:'2nd',summary:'magic', quantity: 8 },
    { id: 7, name: 'Donation 7', category: 'school supplies', type:'stationary' ,stationarytype: 'pencil', quantity: 8 },
    { id: 8, name: 'Donation 8', category: 'blood',name_of_patient:'hanan el dreiny',type:'O', hospital:'el hayat',governorate:'cairo',area:'heliopolis', address: '4 el ghanam',quantity: 1 },
    { id: 9, name: 'Donation 9', category: 'medical', type:'medication' ,medication_use: 'cardiac', quantity: 15 },
    { id: 10, name: 'Donation 10', category: 'medical', type:'devices' ,device_type: 'MRI', quantity: 15 },
    { id: 11, name: 'Donation 11', category: 'medical', type:'equipment' ,equipment_type: 'scalpel', quantity: 15 },
];
