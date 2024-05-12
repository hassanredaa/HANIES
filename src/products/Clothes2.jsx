import React,{useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import { organizationRequests } from '../data.js';
import tshirt from '../../assets/tshirt.jpg';
import IncrementDecrementBtn from './IncrementDecrementBtn.jsx';

// Adjust the path if needed
//import IncrementDecrementBtn from './IncrementDecrementBtn.jsx';

export default function Clothes2() {
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
          <h1>Female Clothes</h1>
        </header>
        <main className="mainm">
          <div className="productm">
            <h2>Product 1</h2>
            <img src={tshirt} alt="clothes" />
            <p>T-shirt</p>
            <p>Age: {organizationRequests.clothes[1].age}</p>
            <p>Gender: {organizationRequests.clothes[1].gender}</p>
            <p>Season: {organizationRequests.clothes[1].season}</p>
            <p>Material: {organizationRequests.clothes[1].material}</p>
            <p>Quantity Needed: {organizationRequests.clothes[1].quantity}</p>
            <IncrementDecrementBtn minValue={1} maxValue={organizationRequests.clothes[1].quantity} />
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