import React from 'react';
import { Link } from 'react-router-dom';
import ggImage from '../assets/gg.png';
import video from '../assets/Untitled Video (3).mp4';
import { about } from './data.js';
import About from './About.jsx';
import imageee from '../assets/istockphoto-1436319269-1024x1024.jpg'
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Text from './Text.tsx';


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
                    {about.map((aboutitem) => <About key={aboutitem.title} {...aboutitem} />)}
                </ul>
            </div>
            <Text />
            <div id="contact">
                <div class="background">
                    <div class="container">
                        <div class="screen">
                            <div class="screen-header">
                                <div class="screen-header-left">
                                    <div class="screen-header-button close"></div>
                                    <div class="screen-header-button maximize"></div>
                                    <div class="screen-header-button minimize"></div>
                                </div>
                                <div class="screen-header-right">
                                    <div class="screen-header-ellipsis"></div>
                                    <div class="screen-header-ellipsis"></div>
                                    <div class="screen-header-ellipsis"></div>
                                </div>
                            </div>
                            <div class="screen-body">
                                <div class="screen-body-item left">
                                    <div class="app-title">
                                        <span>CONTACT</span>
                                        <span>US</span>
                                    </div>
                                    <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
                                </div>
                                <div class="screen-body-item">
                                    <div class="app-form">
                                        <div class="app-form-group">
                                            <input class="app-form-control" placeholder="NAME" />
                                        </div>
                                        <div class="app-form-group">
                                            <input class="app-form-control" placeholder="EMAIL" />
                                        </div>
                                        <div class="app-form-group">
                                            <input class="app-form-control" placeholder="CONTACT NO" />
                                        </div>
                                        <div class="app-form-group message">
                                            <input class="app-form-control" placeholder="MESSAGE" />
                                        </div>
                                        <div class="app-form-group buttons">
                                            <button class="app-form-button">CANCEL</button>
                                            <button class="app-form-button">SEND</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer style={{ textAlign: 'center', padding: '20px 10px', backgroundColor: 'black', color: 'white' }}>
                <p>Copyright © 2023 Good Giving</p>
            </footer>
        </div>
    );
}
