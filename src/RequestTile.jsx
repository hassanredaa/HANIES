import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';


export default function RequestTile(props) {
    return (
        <div class="product-tile">
            <img src={props.source} alt="Product Image" class="product-image" />
                <div class="product-info">
                    <h2 class="product-title">{props.description}</h2>
                    <Link to={props.donation} class="add-to-cart">More Details</Link>
                </div>
        </div>)
}