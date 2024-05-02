import React from 'react';
import { Link } from 'react-router-dom';
import ggImage from '../assets/gg.png';
import video from '../assets/Untitled Video (3).mp4';
import { about } from './data.js';
import About from './About.jsx';
import imageee from '../assets/istockphoto-1436319269-1024x1024.jpg'

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
            <div>
                <img src={imageee}></img>
            </div>
            <div id="about" style={{ padding: '50px', backgroundColor: '#fff', color: '#333', textAlign: 'center' }}>
                <ul>
                {about.map((aboutitem) =>  <About key={aboutitem.title} {...aboutitem} />)}
                </ul>
               
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
