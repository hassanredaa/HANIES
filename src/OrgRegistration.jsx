import React from 'react';

export default function OrgRegistration() {
    return (
        <div className="login-container">
            <h2>Registration</h2>
            <form onSubmit={submitForm}>
                <input type="text" id="first-name" placeholder="First Name" required />
                <input type="text" id="last-name" placeholder="Last Name" required />
                <select id="gender" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <input type="email" id="email" placeholder="Email" required />
                <input type="password" id="password" placeholder="Password" required />
                <input type="tel" id="contact-number" placeholder="Contact Number" required />
                <input type="text" id="organization-name" placeholder="Organization Name" required />
                <select id="organization-type" required>
                    <option value="">Select Organization Type</option>
                    <option value="non-profit">Non-Profit</option>
                    <option value="for-profit">For-Profit</option>
                    {/* Add more options as needed */}
                </select>
                <textarea id="organization-address" placeholder="Organization Address" required />
                <input type="text" id="area" placeholder="Area" required />
                <input type="text" id="governorate" placeholder="Governorate" required />
                <button type="submit">Submit Request</button>
            </form>
        </div>
    );

    function submitForm(event) {
        event.preventDefault();
        // Fetch form values and perform validation
        console.log("Form submitted!");
    }
}

