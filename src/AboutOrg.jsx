import React from 'react';

export default function AboutOrg() {
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        // Handle the file upload logic here
    };

    return (
        <div>
            <h1>About Page</h1>
            <p>This is the about page content.</p>
            <div>
                <h2>Verification</h2>
                <form>
                    <label htmlFor="certificate">Upload Certificate:</label>
                    <input
                        type="file"
                        id="certificate"
                        name="certificate"
                        accept=".jpg, .jpeg, .png"
                        onChange={handleFileUpload}
                    />
                </form>
            </div>
        </div>
    );
}
