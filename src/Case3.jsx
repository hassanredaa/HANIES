import React,{useRef, useState} from 'react';
import { Link } from 'react-router-dom';
//import { organizationRequests } from '../data.js';
//import clothes from '../../assets/clothes.jpg';
//import IncrementDecrementBtn from './IncrementDecrementBtn.jsx';

// Adjust the path if needed
//import IncrementDecrementBtn from './IncrementDecrementBtn.jsx';

export default function Case1() {
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
          <h1>Case details</h1>
        </header>
        <main className="mainm">
          <div className="productm">
            <h2>Product 1</h2>
           
            <p>patient Name: Jane Smith</p>
            <p>Age: 32 </p>
            <p>Gender: female </p>
            <p>weight: 71 </p>
            <p>Address: 456 Elm Street, Anycity, USA </p>
            <p>Organization Name: General Hospital</p>
            <p>Medical Speciality: Orthopedics </p>
            <p>Case Description: Patient suffered a fractured arm due to a fall  </p>
            
            <button className='button3' onClick={handleDonateClick}>Accept Case</button>
          </div>
        </main>

        <div className='app-container'>
          <Link to='/cases' className='button-primary'> Back </Link>
          </div>


        <footer>
          <p>&copy; 2024 My Shop</p>
        </footer>
      </div>
    );
  };