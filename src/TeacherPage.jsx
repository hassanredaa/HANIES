import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TeacherPage() {
    const [subjects, setSubjects] = useState([]);
    const [proBonoClasses, setProBonoClasses] = useState(0);
    const [proBonoStudents, setProBonoStudents] = useState(0);

    const handleSubjectChange = (event) => {
        const { value } = event.target;
        setSubjects(prevSubjects => prevSubjects.includes(value) ? prevSubjects.filter(subj => subj !== value) : [...prevSubjects, value]);
    };

    const handleProBonoClassesChange = (event) => {
        setProBonoClasses(parseInt(event.target.value)); // Parse input to integer
    };

    const handleProBonoStudentsChange = (event) => {
        setProBonoStudents(parseInt(event.target.value)); // Parse input to integer
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle form submission, such as sending data to backend or performing any other action
        console.log("Form submitted");
        window.location.href = '/DonorHome';
    };

    return (
        <div className="teacher-page">
            <h2>Subject and Class Selection for Teaching</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Select Subjects:</label>
                    <div className="subject-checkboxes">
                        <div>
                            <input type="checkbox" id="math" name="math" value="math" onChange={handleSubjectChange} />
                            <label htmlFor="math">Math</label>
                        </div>
                        <div>
                            <input type="checkbox" id="science" name="science" value="science" onChange={handleSubjectChange} />
                            <label htmlFor="science">Science</label>
                        </div>
                        <div>
                            <input type="checkbox" id="english" name="english" value="english" onChange={handleSubjectChange} />
                            <label htmlFor="english">English</label>
                        </div>
                        <div>
                            <input type="checkbox" id="history" name="history" value="history" onChange={handleSubjectChange} />
                            <label htmlFor="history">History</label>
                        </div>
                        {/* Add more subjects as needed */}
                    </div>
                </div>
                <div className="input-group">
                    <label htmlFor="proBonoClasses">Pro-bono Classes:</label>
                    <input type="number" id="proBonoClasses" name="proBonoClasses" value={proBonoClasses} onChange={handleProBonoClassesChange} placeholder="Enter number of pro-bono classes" />
                </div>
                <div className="input-group">
                    <label htmlFor="proBonoStudents">Pro-bono Students:</label>
                    <input type="number" id="proBonoStudents" name="proBonoStudents" value={proBonoStudents} onChange={handleProBonoStudentsChange} placeholder="Enter number of pro-bono students" />
                </div>
                <button type="submit">Submit</button>
            </form>
            <footer style={{ textAlign: 'center', padding: '20px 10px', backgroundColor: 'black', color: 'white' }}>
                <p>Copyright © 2023 Good Giving</p>
            </footer>
        </div>
    );
}
