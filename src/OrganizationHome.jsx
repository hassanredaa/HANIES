import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ggImage from '../assets/ggw.png';
import goodImage from '../assets/good.png';
import avImage from '../assets/img_avatar.png';

export default function OrganizationHome() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [posts, setPosts] = useState([]);

    const initialPosts = [
        { id: 1, username: 'Hassan', category: 'Cloths', content: 'I wanted to request 10 pieces of cloths.', imageUrl: 'https://via.placeholder.com/400x200' },
        { id: 2, username: 'Youssef', category: 'Toys', content: 'I wanted to request toys.', imageUrl: 'https://via.placeholder.com/400x200' }
    ];

    useEffect(() => {
        setPosts(initialPosts);

        // Show alert after 5 seconds
        const alertTimeout = setTimeout(() => {
            window.alert("Alert, new Donor!");
        }, 5000);

        // Clear the timeout when component unmounts
        return () => clearTimeout(alertTimeout);
    }, []);

    const handleDeletePost = (postId) => {
        console.log('Deleting post with ID:', postId);
        const updatedPosts = posts.filter(post => post.id !== postId);
        setPosts(updatedPosts);
    };

    return (
        <div>
            <div className="organization-home">
                {/* Sidebar Section */}
                <div className="sidebar">
                    <div className="logo-container">
                        <img src={ggImage} alt="ggImage" />
                        <img src={goodImage} alt="goodImage" />
                    </div>
                    <div className="profile">
                        <img src={avImage} alt="avImage" className="avatar" />
                        <h1>Name</h1>
                        <p>Organization</p>
                    </div>
                    <ul className="navigation">
                        <li>
                            <Link to="/#about" className="button-primary2">About Us</Link>
                        </li>
                        <li>
                            <Link to="/SchedOrg" className="button-primary">
                                Schedules
                            </Link>
                        </li>
                        <li>
                            <Link to="/DonationPost" className="button-primary">
                                Request Donations
                            </Link>
                        </li>
                        <li>
                            <Link to="/Notifications" className="button-primary">
                                Notifications
                            </Link>
                        </li>
                        <li>
                            <Link to="/UpdateAccOrg" className="button-primary">
                                Update account
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="button-primary">
                                Delete account
                            </Link>
                        </li>
                    </ul>
                    <Link to="/logout" className="logout">
                        Log Out
                    </Link>
                </div>

                {/* Posts Section */}
                <div className="posts">
                    <h2>Organization Dashboard</h2>
                    <h2>Recent Posts</h2>
                    <div className="post-container">
                        {/* Render posts */}
                        {posts.map(post => (
                            <div className="post" style={{ marginTop: '20px' }} key={post.id} >
                                <div className="post-header">
                                    <img src={avImage} alt="User Avatar" className="post-avatar" />
                                    <div>
                                        <p className="post-username">{post.username}</p>
                                        <p className="post-category">{post.category}</p>
                                    </div>
                                </div>
                                <p className="post-content">{post.content}</p>
                                <img src={post.imageUrl} alt="Post Image" className="post-image" />
                                <div className="post-actions">
                                    <Link to="/UpdatePost" className="button-primary2">
                                        Update
                                     </Link>
                                    <Link className="button-primary2" onClick={() => handleDeletePost(post.id)}>
                                        Delete
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <footer style={{ textAlign: 'center', padding: '20px 10px', backgroundColor: 'black', color: 'white' }}>
                <p>Copyright © 2023 Good Giving</p>
            </footer>
        </div>
    );
}
