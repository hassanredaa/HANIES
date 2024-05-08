import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
    const [selectedRole, setSelectedRole] = useState('');
    const [showDocumentUpload, setShowDocumentUpload] = useState(false);

    const handleRoleChange = (event) => {
        const role = event.target.value;
        if (role === 'organization') {
            setOrganizationFieldsVisible(true);
        } else {
            setOrganizationFieldsVisible(false);
        }

        setSelectedRole(role);
        setShowDocumentUpload(role === 'doctor' || role === 'teacher');
    };
    const [userRole, setUserRole] = useState('');
    const [organizationFieldsVisible, setOrganizationFieldsVisible] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        if(selectedRole =='doctor'){
            window.location.href = '/DoctorPage';
        }else if (selectedRole == 'teacher'){
            window.location.href = '/TeacherPage';
        }else{
            window.location.href = '/DonorHome';
        }   
    };

    // const handleRoleChange = (event) => {
    //     setUserRole(event.target.value);
    //     if (event.target.value === 'organization') {
    //         setOrganizationFieldsVisible(true);
    //     } else {
    //         setOrganizationFieldsVisible(false);
    //     }
    //     setShowDocumentUpload(role === 'doctor' || role === 'teacher');

    // };

    return (
        <div className="app-container">
            <div className="content-area">
                <div className="register-container">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
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
                            <div>
                                <label htmlFor="male">Male</label>
                                <input type="radio" id="male" name="gender" value="male" />
                            </div>
                            <div>
                                <label htmlFor="female">Female</label>
                                <input type="radio" id="female" name="gender" value="female" />
                            </div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required placeholder="Enter your email" />
                        </div>

                        <div className="input-group">
                            <label htmlFor="contact num">Contact Number:</label>
                            <input type="contact num" id="contact num" name="contact num" required placeholder="Enter your Mobile Number" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required placeholder="Create a password" />
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
                                    <label htmlFor="First Name">First Name:</label>
                                    <input type="text" id="First Name" name="first Name" required placeholder="Enter your first name" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="Last Name">First Name:</label>
                                    <input type="text" id="Last Name" name="Last Name" required placeholder="Enter your Last name" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="Gender">Gender:</label>
                                    <select id="Gender" name="Gender" required>
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Prefer not to say">Prefer not to say</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="Mobile Number">Mobile Number:</label>
                                    <input type="tel" id="Mobile Number" name="Mobile Number" required placeholder="Enter your Mobile Number" />
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
                                    <label htmlFor="Organization Address">Organization Address:</label>
                                    <input type="Organization Address" id="Organization Address" name="Organization Address" required placeholder="Enter your Organization Address" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="Area">Area:</label>
                                    <input type="text" id="Area" name="Area" required placeholder="Enter your Area" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="Governorate">Area:</label>
                                    <input type="text" id="Governorate" name="Governorate" required placeholder="Enter your Governorate" />
                                </div>



                            </>
                        )}
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
            <footer style={{ textAlign: 'center', padding: '20px 10px', backgroundColor: 'black', color: 'white' }}>
                <p>Copyright © 2023 Good Giving</p>
            </footer>
        </div>
    );
}