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

    return (
        <div className="organization-home">
            <div className="menu">
                <button onClick={toggleMenu}>Menu</button>
                {menuOpen && (
                    <div className="dropdown-menu">
                        <ul>
                            <li>
                                <button onClick={goToAbout}>About</button>
                            </li>
                            {/* Add more menu items here */}
                        </ul>
                    </div>
                )}
            </div>
            <div className="content">
                <h1>Organization HomePage</h1>
                {/* Other content of your OrganizationHome component */}
            </div>
        </div>
    );
}
