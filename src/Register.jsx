import React from 'react';

export default function Register() {
    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
    };

    return (
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
                    <select id="role" name="role" required>
                        <option value="">Select your role</option>
                        <option value="donor">Donor</option>
                        <option value="teacher">Teacher</option>
                        <option value="doctor">Doctor</option>
                        <option value="organization">Organization</option>
                    </select>
                </div>
                <button type="submit">Register</button>
            </form>

            <footer>
                <p>Copyright © 2023 Aid Avenue</p>
            </footer>
        </div>
    );
}
