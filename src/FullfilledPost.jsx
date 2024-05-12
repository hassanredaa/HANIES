import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avImage from '../assets/img_avatar.png';

export default function FullfilledPost () {
  const [posts, setPosts] = useState([
    { id: 1, username: 'User1', category: 'Medical Supplies', content: 'I wanted to donate Medical Supplies.', imageUrl: 'https://via.placeholder.com/400x200', time: 'Recently', showDetails: false, donorDetails: {name: 'Hassan Reda', profession: 'Doctor', email: 'Hassan@example.com', mobile: '+20 101 125 3667' } },
    { id: 2, username: 'User2', category: 'Blood', content: 'I wanted to donate Blood.', imageUrl: 'https://via.placeholder.com/400x200', time: '10 minutes ago', showDetails: false, donorDetails: { name: 'Hany Khalil', profession: 'Doctor', email: 'Hany@example.com', mobile: '+20 101 123 4567' } },
    { id: 3, username: 'User3', category: 'Books', content: 'I wanted to donate Books.', imageUrl: 'https://via.placeholder.com/400x200', time: '15 minutes ago', showDetails: false, donorDetails: { name: 'Marina Nader', profession: 'Teacher', email: 'Marina@example.com', mobile: '+20 102 234 5678' } },
    { id: 4, username: 'User4', category: 'Fever Pills', content: 'I wanted to donate Medical Supplies.', imageUrl: 'https://via.placeholder.com/400x200', time: '20 minutes ago', showDetails: false, donorDetails: {name: 'Youssef Waleed', profession: 'Doctor', email: 'Welo@example.com', mobile: '+20 101 123 1231' } },
    { id: 5, username: 'User5', category: 'Pens', content: 'I wanted to donate Pens.', imageUrl: 'https://via.placeholder.com/400x200', time: '25 minutes ago', showDetails: false, donorDetails: {name: 'Amira Sameh', profession: 'Teacher', email: 'Amira@example.com', mobile: '+20 101 123 7648' } }
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
      <h1>Fulfilled Posts</h1>
      <Link to="/OrganizationHome" className="button-primary2">Home</Link> {/* Home Button */}
      <div className="posts" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {posts.map(post => (
          <div className="post" style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '400px' }} key={post.id}>
            <div className="post-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={avImage} alt="User Avatar" className="post-avatar" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                <div>
                  <p className="post-username">{post.username}</p>
                  <p className="post-category">{post.category}</p>
                </div>
              </div>
              <p className="post-time" style={{ fontSize: '0.8em', color: '#666' }}>{post.time}</p>
            </div>
            <p className="post-content" style={{ marginBottom: '15px' }}>{post.content}</p>
            <img src={post.imageUrl} alt="Post Image" className="post-image" style={{ maxWidth: '100%', height: 'auto', marginBottom: '15px', borderRadius: '10px' }} />
            <div className="post-actions">
              {post.showDetails && post.donorDetails && (
                <div>
                  <p>Name: {post.donorDetails.name}</p>
                  <p>Profession: {post.donorDetails.profession}</p>
                  <p>Email: {post.donorDetails.email}</p>
                  <p>Mobile: {post.donorDetails.mobile}</p>
                </div>
              )}
              <button className="button-primary2" onClick={() => handleViewDonorDetails(post.id)}>
                {post.showDetails ? 'Hide Donor Details' : 'View Donor Details'}
              </button>
              <button className="button-primary2" onClick={() => handleDeletePost(post.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
