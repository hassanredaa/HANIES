import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import MyLocationMap from './Location.jsx'; // Adjust the path based on your file structure
import { api } from './api.js';
import { DataContext } from './data.jsx';
import bgImage from '../assets/bg3.jpg';
import gg from '../assets/ggw.png'



export default function Register() {
    const { users, addUser } = useContext(DataContext);

    const [selectedRole, setSelectedRole] = useState('');
    const [showDocumentUpload, setShowDocumentUpload] = useState(false);

    const handleRoleChange = (event) => {
        const role = event.target.value;
        if (role === 'organization') {
            setDonorFieldsVisible(false);
            setOrganizationFieldsVisible(true);
            setDoctorFieldsVisible(false);
            setTeacherFieldsVisible(false);
        } else if (role === 'Donor') {
            setDonorFieldsVisible(true);
            setOrganizationFieldsVisible(false);
            setDoctorFieldsVisible(false);
            setTeacherFieldsVisible(false);
        } else if (role === 'Teacher') {
            setDonorFieldsVisible(false);
            setOrganizationFieldsVisible(false);
            setDoctorFieldsVisible(false);
            setTeacherFieldsVisible(true);
        } else {
            setDonorFieldsVisible(false);
            setOrganizationFieldsVisible(false);
            setDoctorFieldsVisible(true);
            setTeacherFieldsVisible(false);
        }

        setSelectedRole(role);
        setShowDocumentUpload(role === 'doctor' || role === 'teacher');
    };
    const [userRole, setUserRole] = useState('');
    const [organizationFieldsVisible, setOrganizationFieldsVisible] = useState(false);
    const [DonorFieldsVisible, setDonorFieldsVisible] = useState(false);
    const [DoctorFieldsVisible, setDoctorFieldsVisible] = useState(false);
    const [TeacherFieldsVisible, setTeacherFieldsVisible] = useState(false);

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
            window.location.href = '/DoctorPage';
        } else if (selectedRole == 'teacher') {
            window.location.href = '/TeacherPage';
        } else {
            window.location.href = '/DonorHome';
        }
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

                    <h2>Register</h2>
                    <form onSubmit={handleSubmit} onClick={handleUserArray}>
                        <div className="input-group">
                            <label htmlFor="first-name">First Name:</label>
                            <input type="text" id="first-name" name="first-name" required placeholder="Enter your first name" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="last-name">Last Name:</label>
                            <input type="text" id="last-name" name="last-name" required placeholder="Enter your last name" />
                        </div>

                        <div className="input-group">
                            <label>Gender:</label>
                            <select id="gender" name="gender">
                                <option value="">Select your Gender</option>
                                <option value="donor">Male</option>
                                <option value="teacher">Female</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required placeholder="Enter your email" />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required placeholder="Create a password" />
                        </div>


                        <div><MyLocationMap apiKey={api} />
                        </div>

                        <div className="input-group">
                            <label htmlFor="role">I am a:</label>
                            <select id="role" name="role" required onChange={handleRoleChange}>
                                <option value="">Select your role</option>
                                <option value="donor">Donor</option>
                                <option value="teacher">Teacher</option>
                                <option value="doctor">Doctor</option>
                                <option value="organization">Organization</option>
                            </select>
                        </div>

                        {showDocumentUpload && (
                            <div className="input-group">
                                <label htmlFor="documents">Upload Documents:</label>
                                <input type="file" id="documents" name="documents" accept=".pdf,.doc,.docx" />
                            </div>
                        )}


                        {organizationFieldsVisible && (
                            <>
                                <div className="input-group">
                                    <label htmlFor="organizationName">Organization Name:</label>
                                    <input type="text" id="organizationName" name="organizationName" required placeholder="Enter your organization name" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="organizationType">Organization Type:</label>
                                    <select id="organizationType" name="organizationType" required>
                                        <option value="">Select Organization Type</option>
                                        <option value="non-profit">Non-Profit</option>
                                        <option value="for-profit">For-Profit</option>
                                    </select>
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

                                <div className="input-group">
                                    <label htmlFor="documents">Upload Organization Certificate:</label>
                                    <input type="file" id="documents" name="documents" accept=".pdf,.doc,.docx" />
                                </div>


                            </>
                        )}

                        {DoctorFieldsVisible && (
                            <>
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

                            </>

                        )}
                        {TeacherFieldsVisible && (
                            <>
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

                            </>

                        )}
                        {DonorFieldsVisible && (
                            <>
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

                            </>

                        )}
                        <button className='button-primary2' type="submit">Register</button>
                    </form>
                </div>
            </div>

            {/* <footer style={{ textAlign: 'center', padding: '20px 10px', backgroundColor: 'black', color: 'white' }}>
                <p>Copyright © 2023 Good Giving</p>
            </footer> */}
        </div>
    );
}