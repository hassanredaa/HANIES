import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gg from '../assets/ggw.png';
import bgImage from '../assets/bg2.jpg';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); // State to store password

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Logic to handle login and redirect based on username and password

    const enteredUsername = username;
    const enteredPassword = password;

    // Replace this with your actual authentication logic
    // (e.g., call an API to validate credentials against a database)
    const validCredentials = {
      donor: 'password',
      teacher: 'password',
      admin: 'admin',
      doctor: 'password',
      org: 'org'

    }; // Example credentials (replace with actual data)

    if (validCredentials.hasOwnProperty(enteredUsername) && validCredentials[enteredUsername] === enteredPassword) {
      let redirectPath = '/'; // Default redirect path (can be customized)

      switch (enteredUsername) {
        case 'admin':
          redirectPath = '/admin'; // Specific path for user1
          break;
        case 'donor':
          redirectPath = '/DonorHome'; // Specific path for user2
          break;
        case 'teacher':
          redirectPath = '/Teacherhome'; // Specific path for admin
          break;
        case 'doctor':
          redirectPath = '/'; // Specific path for admin
          break;
          case 'org':
            redirectPath = '/OrganizationHome'; // Specific path for admin
            break;
        default:
          // Handle unexpected usernames or invalid login (optional)
          break;
      }

      navigate(redirectPath); // Perform programmatic redirect
    } else {
      // Handle invalid login (display error message, etc.)
      alert('Invalid username or password.'); // Example error handling
    }
  };

  return (
    <div className="app-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div style={{}}>
        <img src={gg} style={{ paddingRight: '1000px' }} />
        <Link to="/" className="button-primary2">Home</Link>
        <Link to="/#about" className="button-primary2">About Us</Link>
        <Link to="/#contact" className="button-primary2">Contact Us</Link>
      </div>
      <div className="register-container">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="username">Email:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Please Enter Your Email"
              onChange={(e) => setUsername(e.target.value)} // Update state on username change
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Please Enter Your Password"
              onChange={(e) => setPassword(e.target.value)} // Update state on password change
            />
          </div>
          <button className='button-primary2' type="submit">Log In</button>
          <p className="signup-text">
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
          <p className="signup-text">
            Change your password? <Link to="/changepassword">Change Password</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
