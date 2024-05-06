import React, { useState } from 'react';

export default function Register() {
    const [selectedRole, setSelectedRole] = useState('');
    const [showDocumentUpload, setShowDocumentUpload] = useState(false);

    const handleRoleChange = (event) => {
        const role = event.target.value;
        setSelectedRole(role);
        setShowDocumentUpload(role === 'doctor' || role === 'teacher');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
        window.location.href = '/donorhome';
    };

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
                            <select id="role" name="role" value={selectedRole} onChange={handleRoleChange} required>
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

                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
            <footer>
                <p>Copyright © 2023 Good Giving</p>
            </footer>
        </div>
    );
}
