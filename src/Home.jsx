import React from 'react';
import { Link } from 'react-router-dom';
import ggImage from '../assets/gg.png';
import video from '../assets/Untitled Video (3).mp4';

export default function Home() {
    return (
        <div className="background-video" style={{ position: 'relative' }}>
            <header style={{ position: 'absolute', top: '10px', left: '10px', right: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
                <img src={ggImage} alt="Logo" style={{ height: '100px' }} />
                <div>
                    <button className="button-primary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                        About Us
                    </button>
                    <button className="button-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                        Contact Us
                    </button>
                    <Link to="/login" className="button-primary">
                        Sign In
                    </Link>
                </div>
            </header>
            <video autoPlay muted loop id="video-bg" style={{ width: '100%', height: '100vh', objectFit: 'cover', zIndex: -1 }}>
                <source src={video} type="video/mp4" />
            </video>
            <div id="about" style={{ padding: '50px', backgroundColor: '#fff', color: '#333', textAlign: 'center' }}>
                <h1>About Us</h1>
                <div className="info-blocks" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px' }}>
                    <div className="info-block" style={{ width: '45%', margin: '10px', padding: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                        <h2>Our Mission</h2>
                        <p>Facilitate effective giving that addresses critical needs across various sectors without the exchange of money.</p>
                    </div>
                    <div className="info-block" style={{ width: '45%', margin: '10px', padding: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                        <h2>How It Works</h2>
                        <p>Discover needs, donate easily, seamless logistics, and track the impact of your generosity.</p>
                    </div>
                    <div className="info-block" style={{ width: '45%', margin: '10px', padding: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                        <h2>Our Vision</h2>
                        <p>Envision a world where giving is a seamless part of everyday life, creating sustainable impacts through community support.</p>
                    </div>
                    <div className="info-block" style={{ width: '45%', margin: '10px', padding: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                        <h2>Join Us</h2>
                        <p>Whether you're an individual, company, or non-profit, join us in transforming lives through the power of giving.</p>
                    </div>
                </div>
            </div>
            <div id="contact" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: '#f0f0f0' }}>
                <h1>Contact Us</h1>
                <p>How to reach us...</p>
            </div>
            <footer style={{ textAlign: 'center', padding: '20px 10px', backgroundColor: 'black', color: 'white' }}>
                <p>Copyright © 2023 Good Giving</p>
            </footer>
        </div>
    );
}
