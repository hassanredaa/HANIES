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
           
            <p>patient Name: John Doe</p>
            <p>Age: 67 </p>
            <p>Gender: male </p>
            <p>weight: 82 </p>
            <p>Address: 123 Main Street, Anytown, USA </p>
            <p>Organization Name: Community Hospital</p>
            <p>Medical Speciality: Internal Medicine </p>
            <p>Case Description: Patient presented with symptoms of pneumonia </p>
            
            <button className='button3' onClick={handleDonateClick}>Donate</button>
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