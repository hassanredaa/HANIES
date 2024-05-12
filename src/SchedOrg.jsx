import React, { useState } from 'react';

import { Link } from 'react-router-dom';


export default function SchedOrg() {
    const [schedule, setSchedule] = useState([
        { day: 'Monday', hours: ['Morning', 'Afternoon', 'Evening'], availability: [true, true, true] },
        { day: 'Tuesday', hours: ['Morning', 'Afternoon', 'Evening'], availability: [true, true, true] },
        { day: 'Wednesday', hours: ['Morning', 'Afternoon', 'Evening'], availability: [true, true, true] },
        { day: 'Thursday', hours: ['Morning', 'Afternoon', 'Evening'], availability: [true, true, true] },
        { day: 'Friday', hours: ['Morning', 'Afternoon', 'Evening'], availability: [true, true, true] },
        { day: 'Saturday', hours: ['Morning', 'Afternoon', 'Evening'], availability: [true, true, true] },
        { day: 'Sunday', hours: ['Morning', 'Afternoon', 'Evening'], availability: [true, true, true] }
    ]);

    const toggleAvailability = (dayIndex, hourIndex) => {
        const updatedSchedule = [...schedule];
        updatedSchedule[dayIndex].availability[hourIndex] = !updatedSchedule[dayIndex].availability[hourIndex];
        setSchedule(updatedSchedule);
    };

    const setAllAvailable = () => {
        const updatedSchedule = schedule.map(day => ({
            ...day,
            availability: Array(day.hours.length).fill(true)
        }));
        setSchedule(updatedSchedule);
    };

    const saveChanges = () => {
        // Implement your save functionality here
        console.log("Changes saved:", schedule);
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
            <h1>Schedule</h1>
            <table style={{ margin: '0 auto' }}>
            <thead>
    <tr>
        <th style={{ backgroundColor: 'black', color: 'white' }}>Day</th>
        <th style={{ backgroundColor: 'black', color: 'white' }}>Morning</th>
        <th style={{ backgroundColor: 'black', color: 'white' }}>Afternoon</th>
        <th style={{ backgroundColor: 'black', color: 'white' }}>Evening</th>
    </tr>
</thead>

                <tbody>
                    {schedule.map((entry, dayIndex) => (
                        <tr key={dayIndex}>
                            <td>{entry.day}</td>
                            {entry.availability.map((availability, hourIndex) => (
                                <td key={hourIndex}>
                                    <button
                                        className={`button-primary ${availability ? 'available' : 'busy'}`}
                                        onClick={() => toggleAvailability(dayIndex, hourIndex)}
                                    >
                                        {availability ? 'Available for delivery' : 'Busy'}
                                    </button>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ marginTop: '20px' }}>
                <button className="button-primary" onClick={setAllAvailable}>Set All Available</button>
                <Link to="/OrganizationHome" className="button-primary">
                            Save
                        </Link>
            </div>
            <footer style={{ textAlign: 'center', padding: '20px 10px', backgroundColor: 'black', color: 'white' }}>
                <p>Copyright © 2023 Good Giving</p>
            </footer>
        </div>
    );
}
