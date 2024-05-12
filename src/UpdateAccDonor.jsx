import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import MyLocationMap from './Location.jsx'; 
import { api } from './api.js';
import { DataContext } from './data.jsx';
import bgImage from '../assets/bg3.jpg';
import gg from '../assets/ggw.png'



export default function UpdateAccDonor() {
    const { users, addUser } = useContext(DataContext);

    const [selectedRole, setSelectedRole] = useState('');
    const [showDocumentUpload, setShowDocumentUpload] = useState(false);

    
   
    const handleUserArray = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const formData = new FormData(event.target);
        const newUser = {};

        // Get form data
        const name = event.target.first - name.value;
        const password = event.target.password.value;
        const email = event.target.email.value;

        // Call the addUser function to add the user
        addUser(name, last, gender, email, number, password, type, doc);

        // Clear the form fields
        event.target.reset();
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        if (selectedRole == 'doctor') {
            window.location.href = '/DoctorHome';
        } else if (selectedRole == 'teacher') {
            window.location.href = '/Teacherhome';
        } else {
            window.location.href = '/DonorHome';
        }
    };
    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
    };





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
                    <form onSubmit={handleSubmit} onClick={handleUserArray}>
                       
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
                        <div className="input-group">
                            <label htmlFor="role">Role:</label>
                            <select id="role" name="role" value={selectedRole} onChange={handleRoleChange}>
                                <option value="">Select Role</option>
                                <option value="doctor">Doctor</option>
                                <option value="teacher">Teacher</option>
                                <option value="donor">Donor</option>
                            </select>
                       </div>
                       


                       
                        <button className="button-primary" onClick={handleSubmit} >
                            Save
                        </button>

                    </form>
                </div>
            </div>

            {/* <footer style={{ textAlign: 'center', padding: '20px 10px', backgroundColor: 'black', color: 'white' }}>
                <p>Copyright ©️ 2023 Good Giving</p>
            </footer> */}
        </div>
    );
}