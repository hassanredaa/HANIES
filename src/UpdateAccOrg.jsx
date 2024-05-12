import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import MyLocationMap from './Location.jsx'; 
import { api } from './api.js';
import { DataContext } from './data.jsx';
import bgImage from '../assets/bg3.jpg';
import gg from '../assets/ggw.png'



export default function UpdateAccOrg() {
  
    return (
        <div className="app-container" style={{ backgroundImage: `url(${bgImage})` }}>
            <div style={{ textAlign: 'right', marginBottom: '20px' }}>
            <img src={gg} style={{paddingRight: '1000px'}}></img>

                <Link to="/" className="button-primary2">Home</Link>
                {/* Link to the about us section */}
                <Link to="/#about" className="button-primary2">About Us</Link>
                {/* Link to the contact us section */}
                <Link to="/#contact" className="button-primary2">Contact Us</Link>
            </div>
            <div className="content-area">
                <div className="register-container" style={{ opacity: '0.6' }}>

                    <h2>Update</h2>
                    <form>
                       
                        <div className="input-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required placeholder="Enter your email" />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required placeholder="Create a password" />
                        </div>

                                <div className="input-group">
                                    <label htmlFor="contact num">Contact Number:</label>
                                    <input type="contact num" id="contact num" name="contact num" required placeholder="Enter your Mobile Number" />
                                </div>


                                <div className="input-group">
                                    <label htmlFor="address">Address:</label>
                                    <input type="address" id="address" name="address" required placeholder="Enter your address" />
                                </div>

                                <div className="input-group">
                                    <label htmlFor="area">Area:</label>
                                    <input type="area" id="area" name="area" required placeholder="Enter your area" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="gov">Governorate:</label>
                                    <input type="gov" id="gov" name="gov" required placeholder="Enter your governorate" />
                                </div>
                        <div><MyLocationMap apiKey={api} />
                        </div>

                       
                       


                       
                        <Link to="/OrganizationHome" className='button-primary2' type="submit">Save</Link>
                    </form>
                </div>
            </div>

            {/* <footer style={{ textAlign: 'center', padding: '20px 10px', backgroundColor: 'black', color: 'white' }}>
                <p>Copyright ©️ 2023 Good Giving</p>
            </footer> */}
        </div>
    );
}