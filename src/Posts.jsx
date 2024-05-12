import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avImage from '../assets/img_avatar.png';
import MyLocationMap from './Location.jsx'; // Adjust the path based on your file structure
import { api } from './api.js';

const Posts = () => {
  const [posts, setPosts] = useState([
    
        { id: 1, username: 'User5', category: 'schoolSupplies', content: 'I want a teacher', imageUrl: 'https://via.placeholder.com/400x200', time: '25 minutes ago', showDetails: false, donorDetails: {number_of_students:'5', address: '4 el ghanam', location : <MyLocationMap apiKey={api}/> , subject: 'History', governorate:'Cairo',area:'Nasr City' } },
        { id: 2, username: 'User6', category: 'schoolSupplies', content: 'I need school supplies for my classroom', imageUrl: 'https://via.placeholder.com/400x200', time: '30 minutes ago', showDetails: false, donorDetails: {number_of_students: '20', address: '10 Main Street', location: <MyLocationMap apiKey={api} />, subject: 'Mathematics',governorate:'Giza',area:'Agouza' } },
        { id: 3, username: 'User7', category: 'schoolSupplies', content: 'Looking for educational materials', imageUrl: 'https://via.placeholder.com/400x200', time: '40 minutes ago', showDetails: false, donorDetails: {number_of_students: '15', address: '15 Oak Avenue', location: <MyLocationMap apiKey={api} />, subject: 'Science',governorate:'Alexandria',area:'Sporting' } },
        { id: 4, username: 'User8', category: 'schoolSupplies', content: 'Seeking assistance with classroom resources', imageUrl: 'https://via.placeholder.com/400x200', time: '1 hour ago', showDetails: false, donorDetails: {number_of_students: '30', address: '20 Elm Street', location: <MyLocationMap apiKey={api} />, subject: 'Literature',governorate:'Cairo',area:'Heliopolis' } }
      
        ]);

        const [selectedSubject, setSelectedSubject] = useState('');
        const [selectedGovernorate, setSelectedGovernorate] = useState('');
        const [selectedArea, setSelectedArea] = useState('');
      
        const handleSubjectChange = (event) => {
          setSelectedSubject(event.target.value);
        };
      
        const handleGovernorateChange = (event) => {
          setSelectedGovernorate(event.target.value);
        };
      
        const handleAreaChange = (event) => {
          setSelectedArea(event.target.value);
        };
      
        const filteredPosts = posts.filter(post => {
          if (selectedSubject && selectedGovernorate && selectedArea) {
            return post.donorDetails.subject === selectedSubject && post.donorDetails.governorate === selectedGovernorate && post.donorDetails.area === selectedArea;
          } else if (selectedSubject && selectedGovernorate) {
            return post.donorDetails.subject === selectedSubject && post.donorDetails.governorate === selectedGovernorate;
          } else if (selectedSubject && selectedArea) {
            return post.donorDetails.subject === selectedSubject && post.donorDetails.area === selectedArea;
          } else if (selectedGovernorate && selectedArea) {
            return post.donorDetails.governorate === selectedGovernorate && post.donorDetails.area === selectedArea;
          } else if (selectedSubject) {
            return post.donorDetails.subject === selectedSubject;
          } else if (selectedGovernorate) {
            return post.donorDetails.governorate === selectedGovernorate;
          } else if (selectedArea) {
            return post.donorDetails.area === selectedArea;
          }
          return true;
        });
      

  const handleDeletePost = (postId) => {
    // Filter out the post with the given postId
    const updatedPosts = posts.filter(post => post.id !== postId);
    // Update the state with the filtered posts
    setPosts(updatedPosts);
    console.log('Deleted post with ID: ${postId}');
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
      <h1>Posts</h1>
      <div>
        <label htmlFor="subjectFilter">Filter by Subject:</label>
        <select id="subjectFilter" value={selectedSubject} onChange={handleSubjectChange}>
          <option value="">All Subjects</option>
          <option value="History">History</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science</option>
          <option value="Literature">Literature</option>
        </select>
      </div>
      <div>
        <label htmlFor="governorateFilter">Filter by Governorate:</label>
        <select id="governorateFilter" value={selectedGovernorate} onChange={handleGovernorateChange}>
          <option value="">All Governorates</option>
          <option value="Cairo">Cairo</option>
          <option value="Giza">Giza</option>
          <option value="Alexandria">Alexandria</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="areaFilter">Filter by Area:</label>
        <select id="areaFilter" value={selectedArea} onChange={handleAreaChange}>
          <option value="">All Areas</option>
          {/* Add options for areas based on selected governorate */}
          {/* Example for Cairo */}
          {selectedGovernorate === 'Cairo' && (
            <>
              <option value="Nasr City">Nasr City</option>
              <option value="Heliopolis">Heliopolis</option>
              {/* Add more options as needed */}
            </>
          )}
          {/* Example for Giza */}
          {selectedGovernorate === 'Giza' && (
            <>
              <option value="Agouza">Agouza</option>
              {/* Add more options as needed */}
            </>
          )}
          {/* Example for Alexandria */}
          {selectedGovernorate === 'Alexandria' && (
            <>
              <option value="Sporting">Sporting</option>
              {/* Add more options as needed */}
            </>
          )}
          {/* Add more conditions for other governorates */}
        </select>
        </div>
      <div className="posts" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {filteredPosts.map(post => (
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
            <img src={post.imageUrl} alt="Post Image" className="post-image" style={{ maxWidth: '100%', height: 'auto', marginBottom: '15px', borderRadius: '10px' }} />
            <div className="post-actions">
              {post.showDetails && post.donorDetails && (
                <div>
                  <p>Number of students: {post.donorDetails.number_of_students}</p>
                  <p>Address: {post.donorDetails.address}</p>
                  <p>Location: {post.donorDetails.location}</p>
                  <p>Subject: {post.donorDetails.subject}</p>
                </div>
              )}
              <button className="button-primary2" onClick={() => handleViewDonorDetails(post.id)}>
                {post.showDetails ? 'Hide  Details' : 'View More Details'}
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

export default Posts;