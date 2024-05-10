import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TeacherPage() {
    const [proBonoClasses, setProBonoClasses] = useState(1);
    const [proBonoStudents, setProBonoStudents] = useState(1);
    const [selectedSubject, setSelectedSubject] = useState('');

    const handleSubjectChange = (event) => {
        setSelectedSubject(event.target.value);
    };

    const handleProBonoClassesChange = (event) => {
        setProBonoClasses(parseInt(event.target.value)); // Parse input to integer
    };

    const handleProBonoStudentsChange = (event) => {
        setProBonoStudents(parseInt(event.target.value)); // Parse input to integer
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (proBonoClasses < 1) {
            alert("Pro-bono classes must be greater than or equal to 1");
            return; // Prevent further execution if validation fails
        }
        if (proBonoStudents < 1) {
            alert("Pro-bono students must be greater than or equal to 1");
            return; // Prevent further execution if validation fails
        }
        console.log("Form submitted");
        window.location.href = '/DonorHome';
    };

    return (
        <div className="teacher-page">
            <h2>Subject and Class Selection for Teaching</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Select Subjects:</label>
                    <select id="subjects" name="subjects" value={selectedSubject} onChange={handleSubjectChange} required placeholder ="Select a subject" >
                    <option value="">Select a subject</option>
                    <option value="math">Math</option>
                    <option value="science">Science</option>
                    <option value="english">English</option>
                    <option value="history">History</option>
                    {/* Add more subjects as needed */}
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="proBonoClasses">Pro-bono Classes:</label>
                    <input type="number" id="proBonoClasses" name="proBonoClasses" value={proBonoClasses} onChange={handleProBonoClassesChange} required placeholder="Enter number of pro-bono classes" />
                </div>
                <div className="input-group">
                    <label htmlFor="proBonoStudents">Pro-bono Students:</label>
                    <input type="number" id="proBonoStudents" name="proBonoStudents" value={proBonoStudents} onChange={handleProBonoStudentsChange} required placeholder="Enter number of pro-bono students" />
                </div>
                <button type="submit">Submit</button>
            </form>
            <footer style={{ textAlign: 'center', padding: '20px 10px', backgroundColor: 'black', color: 'white' }}>
                <p>Copyright © 2023 Good Giving</p>
            </footer>
        </div>
    );
}
