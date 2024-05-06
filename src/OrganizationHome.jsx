import React, { useState } from 'react';

export default function OrganizationHome() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const goToAbout = () => {
       window.open('http://localhost:5173/AboutOrg');
        console.log("Navigate to AboutOrg.jsx");
    };
    const goToSched = () => {
        console.log("navigate to schedule.jsx");
    };

    return (
        <div className="h2">
            <h2>Organization</h2>
            <div className="dropdown">
                <button onClick={toggleMenu}>Menu</button>
                {menuOpen && (
                    <div className="button-Orgprimary">
                        <ul>
                            <li>
                                <button className='button-Orgprimary' onClick={goToAbout}>About</button>
                            </li>
                           
                            <li>
                            <button className='button-Orgprimary' onClick={goToSched}>schedule timeslot</button>
                            </li>
                           
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
