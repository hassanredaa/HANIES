import React, { useState } from 'react';

export default function Register() {
    const [userRole, setUserRole] = useState('');
    const [organizationFieldsVisible, setOrganizationFieldsVisible] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
    };

    const handleRoleChange = (event) => {
        setUserRole(event.target.value);
        if (event.target.value === 'organization') {
            setOrganizationFieldsVisible(true);
        } else {
            setOrganizationFieldsVisible(false);
        }
    };

    return (
        <div className="app-container">  {/* Full page container */}
            <div className="content-area">  {/* Content container to hold form */}
                <div className="register-container">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" required placeholder="Enter your username" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required placeholder="Enter your email" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required placeholder="Create a password" />
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
                        {organizationFieldsVisible && (
                            <>
                                <div className="input-group">
                                    <label htmlFor="organizationName">Organization Name:</label>
                                    <input type="text" id="organizationName" name="organizationName" required placeholder="Enter your organization name" />
                                </div>
                                
                                <div className="input-group">
                                    <label htmlFor="First Name">First Name:</label>
                                    <input type="text" id="First Name" name="first Name" required placeholder="Enter your first name"/>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="Last Name">First Name:</label>
                                    <input type="text" id="Last Name" name="Last Name" required placeholder="Enter your Last name"/>
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
                                    <input type="tel" id="Mobile Number" name="Mobile Number" required placeholder="Enter your Mobile Number"/>
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
                                    <input type="Organization Address" id="Organization Address" name="Organization Address" required placeholder="Enter your Organization Address"/>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="Area">Area:</label>
                                    <input type="text" id="Area" name="Area" required placeholder="Enter your Area"/>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="Governorate">Area:</label>
                                    <input type="text" id="Governorate" name="Governorate" required placeholder="Enter your Governorate"/>
                                </div>


                                
                            </>
                        )}
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
            <footer>  {/* Footer that should always be at the bottom */}
                <p>Copyright ©️ 2023 Good Giving</p>
            </footer>
        </div>
    );
}