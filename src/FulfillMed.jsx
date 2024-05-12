import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avImage from '../assets/img_avatar.png';
import MyLocationMap from './Location.jsx'; // Adjust the path based on your file structure
import { api } from './api.js';

const FulfillMed = () => {
  const [posts, setPosts] = useState([
    { id: 1, username: 'Case 1', medical_speciality: 'Cardiovascular', content: 'I want a cardiovascular doctor', time: '25 minutes ago', showDetails: false, donorDetails: { address: '4 el ghanam', location: <MyLocationMap apiKey={api} />, governorate: 'Cairo', area: 'masr el gedida' } },
    { id: 2, username: 'Case 2', medical_speciality: 'internal medicine', content: 'I want an internal medicine doctor', time: '30 minutes ago', showDetails: false, donorDetails: { address: '10 Main Street', location: <MyLocationMap apiKey={api} />, governorate: 'Alexandria', area: 'central park' } },
    { id: 3, username: 'Case 3', medical_speciality: 'orthopedic', content: 'I want an orthopedic doctor', time: '40 minutes ago', showDetails: false, donorDetails: { address: '15 Oak Avenue', location: <MyLocationMap apiKey={api} />, governorate: 'Suez', area: 'south LA' } },
    { id: 4, username: 'Case 4', medical_speciality: 'orthodontic', content: 'I want an orthodontic doctor', time: '1 hour ago', showDetails: false, donorDetails: { address: '20 Elm Street', location: <MyLocationMap apiKey={api} />, governorate: 'Menya', area: 'central london' } }
  ]);

  const handleDeletePost = (postId) => {
    // Filter out the post with the given postId
    const updatedPosts = posts.filter(post => post.id !== postId);
    // Update the state with the filtered posts
    setPosts(updatedPosts);
    console.log(`Deleted post with ID: ${postId}`);
  };

  const handleViewDonorDetails = (postId) => {
    // Toggle the showDetails flag for the post with the given postId
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, showDetails: !post.showDetails };
      }
      return post;
    });
    // Update the state with the updated posts
    setPosts(updatedPosts);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Cases</h1>
      <div className="posts" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
  {posts.map(post => (
    <div className="post" style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '400px' }} key={post.id}>
      <div className="post-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={avImage} alt="User Avatar" className="post-avatar" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
          <div>
            <p className="post-username">{post.username}</p>
          </div>
        </div>
        <p className="post-time" style={{ fontSize: '0.8em', color: '#666' }}>{post.time}</p>
      </div>
      <p className="post-content" style={{ marginBottom: '15px' }}>{post.content}</p>
      <div className="post-actions">
        {post.showDetails && post.donorDetails && (
          <div>
            <p>Address: {post.donorDetails.address}</p>
            <p>Location: {post.donorDetails.location}</p>
            {/* Check if medical_speciality exists in donorDetails */}
            {post.donorDetails.medical_speciality && (
              <p>Medical Speciality: {post.donorDetails.medical_speciality}</p>
            )}
          </div>
        )}
        <button className="button-primary2" onClick={() => handleViewDonorDetails(post.id)}>
          {post.showDetails ? 'Hide Details' : 'View More Details'}
        </button>
        <button className="button-primary2" onClick={() => handleDeletePost(post.id)}>
          Fullfill
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default FulfillMed;
