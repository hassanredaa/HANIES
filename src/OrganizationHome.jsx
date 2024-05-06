import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OrganizationHome() {
    const [menuOpen, setMenuOpen] = useState(false);
    let navigate = useNavigate(); 

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const goToAbout = () => {
        navigate('/AboutOrg');
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
