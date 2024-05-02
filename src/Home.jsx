import React from 'react';
import ggImage from '../assets/gg.png';
import video from '../assets/Untitled Video (3).mp4';

export default function Home() {
    return (
        <div className="background-video" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <header style={{ position: 'absolute', top: '10px', left: '10px', right: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }}>
                <img src={ggImage} alt="Logo" style={{ height: '100px' }} /> {/* Increased size */}
                <button className="button-primary">Home</button>
            </header>
            <video autoPlay muted loop id="video-bg" style={{ width: '100%', height: '100vh', objectFit: 'cover', zIndex: -1 }}>
                <source src={video} type="video/mp4" />
            </video>

        <h1>test</h1>
            <footer style={{ textAlign: 'center', padding: '20px 10px', backgroundColor: 'black' }}> {/* Styling for visibility and layout */}
                <p>Copyright © 2023 Good Giving</p>
            </footer>
        </div>
    );
}
