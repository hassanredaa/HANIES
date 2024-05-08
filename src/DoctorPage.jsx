import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DoctorPage() {
    const [clinicLocation, setClinicLocation] = useState({
        address: '',
        area: '',
        governorate: '',
        googleMarker: null // You can customize this based on how you handle Google Maps integration
    });
    const [specialty, setSpecialty] = useState('');
    const [proBonoCases, setProBonoCases] = useState(0);

    const handleLocationChange = (event) => {
        const { name, value } = event.target;
        setClinicLocation(prevLocation => ({
            ...prevLocation,
            [name]: value
        }));
    };

    const handleSpecialtyChange = (event) => {
        setSpecialty(event.target.value);
    };

    const handleProBonoCasesChange = (event) => {
        setProBonoCases(parseInt(event.target.value)); // Parse input to integer
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle form submission, such as sending data to backend or performing any other action
        console.log("Form submitted");
         window.location.href = '/DonorHome';
    };

    return (
        <div className="doctor-page">
            <h2>Clinic Location Specification</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" value={clinicLocation.address} onChange={handleLocationChange} placeholder="Enter clinic address" />
                </div>
                <div className="input-group">
                    <label htmlFor="area">Area:</label>
                    <input type="text" id="area" name="area" value={clinicLocation.area} onChange={handleLocationChange} placeholder="Enter area" />
                </div>
                <div className="input-group">
                    <label htmlFor="governorate">Governorate:</label>
                    <input type="text" id="governorate" name="governorate" value={clinicLocation.governorate} onChange={handleLocationChange} placeholder="Enter governorate" />
                </div>
                {/* Add Google Maps integration here if needed */}
                <div className="input-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input type="text" id="specialty" name="specialty" value={specialty} onChange={handleSpecialtyChange} placeholder="Enter doctor's specialty" />
                </div>
                <div className="input-group">
                    <label htmlFor="proBonoCases">Pro-bono Cases:</label>
                    <input type="number" id="proBonoCases" name="proBonoCases" value={proBonoCases} onChange={handleProBonoCasesChange} placeholder="Enter number of pro-bono cases" />
                </div>
                <button type="submit">Submit</button>
            </form>
            <footer style={{ textAlign: 'center', padding: '20px 10px', backgroundColor: 'black', color: 'white' }}>
                <p>Copyright © 2023 Good Giving</p>
            </footer>
        </div>
    );
}
