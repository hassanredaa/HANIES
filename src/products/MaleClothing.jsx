import React from 'react';
import { Link } from 'react-router-dom';
import { organizationRequests } from '../data.js';
import IncrementDecrementBtn from './IncrementDecrementBtn.jsx';

export default function MaleClothing() {
  return (
    <div className="product-page">
      <h2>{organizationRequests.clothes[0].description}</h2>
      <p>Description: {organizationRequests.clothes[0].description}</p>
      <IncrementDecrementBtn />
       {/* <p>Price: ${product.price}</p> 
      <p>Category: {product.category}</p>
      <p>Stock: {product.stock}</p>  */}
      <button className='button-primary'>Donate</button>
    </div>
  );
};

