import React,{useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import { organizationRequests } from '../data.js';
import clothes from '../../assets/clothes.jpg';
import IncrementDecrementBtn from './IncrementDecrementBtn.jsx';
// import { api } from './api.js';

// Adjust the path if needed
//import IncrementDecrementBtn from './IncrementDecrementBtn.jsx';

export default function Blood1() {
    const [showDeliverySection, setShowDeliverySection] = useState(false);
    const deliveryOptionsRef = useRef(null);
    const [selectedTransportationOption, setSelectedTransportationOption] = useState('');
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  
    const handleDonateClick = () => {
      setShowDeliverySection(true);
      if (deliveryOptionsRef.current) {
        deliveryOptionsRef.current.scrollIntoView({
          behavior: 'smooth',
        });
      }
    };
  
    const handleTransportationOptionChange = (event) => {
      setSelectedTransportationOption(event.target.value);
    };
  
    const handleTimeSlotChange = (event) => {
      setSelectedTimeSlot(event.target.value);
    };
  
    return (
      <div className="shopping-page">
        <header className="header">
          <h1>Blood Donation</h1>
        </header>
        <main className="mainm">
          <div className="productm">
            <h2>Product 1</h2>
            <img src={clothes} alt="clothes" />
            <p>Blood Donation O</p>
            <p>Patient Name: {organizationRequests.bloodDonations[0].name_of_patient}</p>
            <p>Blood Type: {organizationRequests.bloodDonations[0].type}</p>
            <p>Hospital Name: {organizationRequests.bloodDonations[0].hospital } </p>
            <p>Area: {organizationRequests.bloodDonations[0].area } </p>
            <p>Governorate: {organizationRequests.bloodDonations[0].governorate } </p>
            <p>Address: {organizationRequests.bloodDonations[0].address } </p>
           {/* </div> <div><MyLocationMap apiKey={api} /> */}

            <IncrementDecrementBtn minValue={1} maxValue={organizationRequests.clothes[0].quantity} />
            <button className='button3' onClick={handleDonateClick}>Donate</button>
          </div>
        </main>
        {showDeliverySection && (
          <div ref={deliveryOptionsRef} className="delivery-section">
            <h2>Delivery Options</h2>
            <div>
              <label htmlFor="transportationOption">Transportation Option:</label>
              <select id="transportationOption" value={selectedTransportationOption} onChange={handleTransportationOptionChange} className="dropdown4">
                <option value="">Select Transportation Option</option>
                <option value="Truck">Truck</option>
                <option value="Car">Car</option>
                <option value="Motorcycle">Motorcycle</option>
              </select>
              <p>Selected Option: {selectedTransportationOption}</p>
            </div>
            <div>
              <label htmlFor="timeSlot">Time Slot:</label>
              <select id="timeSlot" value={selectedTimeSlot} onChange={handleTimeSlotChange} className="dropdown4">
                <option value="">Select Time Slot</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
              <p>Selected Option: {selectedTimeSlot}</p>
            </div>
            <Link to="/donorhome"> {/* Link to "donorhome" page */}
            <button className='button3'>Confirm</button> {/* Confirm button */}
          </Link>
          </div>
        )}
        <footer>
          <p>&copy; 2024 My Shop</p>
        </footer>
      </div>
    );
  };