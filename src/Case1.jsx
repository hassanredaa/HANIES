import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import avImage from '../assets/img_avatar.png';

export default function Case1() {
    
    return (
        <div className='Post' style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
            <h1>
                <h1>Case details</h1>
            </h1>
            <main>
                <div className="post" style={{ margintop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '400px' }}>
                    <div className="post-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={avImage} alt="User Avatar" className="post-avatar" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                            <div>
                                <p className="post-username">User1</p>
                            </div>
                        </div>
                        <p className="post-time" style={{ fontSize: '0.8em', color: '#666' }}>Recently</p>
                    </div>
                    <div className="post-content" style={{ marginBottom: '15px' }}>
                        <h2>Case 1</h2>
                        <p>patient Name: Hanan el dreiny</p>
                        <p>Age: 42 </p>
                        <p>Gender: female </p>
                        <p>weight: 71 </p>
                        <p>Address: 4 el ghanam </p>
                        <p>Organization Name: el haya </p>
                        <p>Medical Speciality: cardiovascular </p>
                        <p>Case Description:  </p>
                    </div>
                    <Link to='/doctorhome' className='button-primary2'> accept case </Link>
                   
                </div>
                <Link to='/cases' className='button-primary2'> Back </Link>
            </main>
            <div className='app-container'>
                
            </div>

            
        </div>
    );
};
