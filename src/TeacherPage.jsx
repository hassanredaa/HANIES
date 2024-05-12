import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import MyLocationMap from './Location.jsx'; // Adjust the path based on your file structure
import { api } from './api.js';
import { DataContext } from './data.jsx';
import bgImage from '../assets/bg3.jpg';
import gg from '../assets/ggw.png'

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
        console.log("Form submitted");
        window.location.href = '/Teacherhome';
    };

    return (
        <div className="app-container" style={{ backgroundImage: `url(${bgImage})` }}>
            <h2>Subject and Class Selection for Teaching</h2>
            <form onSubmit={handleSubmit}>
            <div className="register-container">
                <div className="input-group">
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
                    <input type="number" id="proBonoClasses" name="proBonoClasses" value={proBonoClasses} onChange={handleProBonoClassesChange} required placeholder="Enter number of pro-bono classes" min="1" />
                </div>
                <div className="input-group">
                    <label htmlFor="proBonoStudents">Pro-bono Students:</label>
                    <input type="number" id="proBonoStudents" name="proBonoStudents" value={proBonoStudents} onChange={handleProBonoStudentsChange} required placeholder="Enter number of pro-bono students" min="1" />
                </div>
                <button  className='button-primary2' type="submit">Submit</button>
                </div>
                </div>
            </form>
           
        </div>
    );
}
