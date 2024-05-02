import React, { useState } from 'react';

function ChangePassword() {
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.newPassword !== formData.confirmNewPassword) {
            alert("New passwords do not match :(");
            return;
        }
        console.log("Password Change Requested:", formData);
        alert("Password has been successfully changed :)");
        setFormData({
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: ''
        });
    };

    return (
        <div className="app-container">
            <div className="content-area">
                <div className="change-password-container">
                    <h2>Change Password</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="oldPassword">Old Password:</label>
                            <input type="password" id="oldPassword" name="oldPassword" value={formData.oldPassword} onChange={handleChange} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="newPassword">New Password:</label>
                            <input type="password" id="newPassword" name="newPassword" value={formData.newPassword} onChange={handleChange} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirmNewPassword">Confirm New Password:</label>
                            <input type="password" id="confirmNewPassword" name="confirmNewPassword" value={formData.confirmNewPassword} onChange={handleChange} required />
                        </div>
                        <button type="submit">Change Password</button>
                    </form>
                </div>
            </div>
            <footer>
                <p>Copyright © 2023 Good Giving</p>
            </footer>
        </div>
    );
}

export default ChangePassword;
