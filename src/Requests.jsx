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
    const [donations, setDonations] = useState([
        { id: 1, name: ' Donation 1', category: 'clothes', age: 'adult', gender: 'male', season: 'winter', quantity: 10 },
        { id: 2, name: ' Donation 2', category: 'toys', age: 'child', gender: 'unisex', season: 'any', quantity: 5 },
        { id: 3, name: ' Donation 3', category: 'food', age: 'any', gender: 'any', season: 'any', quantity: 20 },
        { id: 4, name: ' Donation 4', category: 'clothes', age: 'child', gender: 'female', season: 'summer', quantity: 15 },
        { id: 5, name: ' Donation 5', category: 'toys', age: 'any', gender: 'any', season: 'any', quantity: 8 },
    ]);

    const handleFilter = (filterValue) => {
        setFilter(filterValue);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleDonationClick = (donation) => {
        setSelectedDonation(donation);
    };

    const filteredDonations = donations.filter(donation => {
        const categoryMatch = filter === '' || donation.category === filter;
        const searchTermMatch = searchTerm === '' || donation.category.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && searchTermMatch;
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
                <FilterButton onClick={() => handleFilter('clothes')} text="Clothes" />
                <FilterButton onClick={() => handleFilter('toys')} text="Toys" />
                <FilterButton onClick={() => handleFilter('food')} text="Food" />
                <FilterButton onClick={() => handleFilter('')} text="All" />
            </div>

            {selectedDonation && (
                <div>
                    {/* Display selected donation details */}
                    <h2>Selected Donation Details</h2>
                    <p>Name: {selectedDonation.name}</p>
                    <p>Category: {selectedDonation.category}</p>
                    <p>Age: {selectedDonation.age}</p>
                    <p>Gender: {selectedDonation.gender}</p>
                    <p>Season: {selectedDonation.season}</p>
                    <p>Quantity: {selectedDonation.quantity}</p>
                </div>
            )}

            <div>
                {/* Display filtered donations */}
                <ul>
                    {filteredDonations.map(donation => (
                        <li key={donation.id} onClick={() => handleDonationClick(donation)}>
                            <strong>{donation.name}</strong> - Category: {donation.category}, Quantity: {donation.quantity}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
