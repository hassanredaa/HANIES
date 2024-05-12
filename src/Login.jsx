import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import gg from '../assets/ggw.png';
import bgImage from '../assets/bg2.jpg';


export default function Login() {

    
    return (
        
        <div className="app-container" style={{ backgroundImage: `url(${bgImage})`}}> {/* Single outermost container */}
            <div style={{ textAlign: 'right' }}>
               <img src={gg} style={{paddingRight: '1000px'}}></img>
                <Link to="/" className="button-primary2">Home</Link>
                {/* Link to the about us section */}
                <Link to="/#about" className="button-primary2">About Us</Link>
                {/* Link to the contact us section */}
                <Link to="/#contact" className="button-primary2">Contact Us</Link>
            </div>
            <div className="login-container" style={{opacity: '0.6'}}>
                <form action="/submit-your-login-form" method="POST">

                    <h2>Login</h2>

                    <div className="input-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required placeholder="Please Enter Your Username" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required placeholder="Please Enter Your Password" />
                    </div>
                    <button type="submit">Log In</button>
                    <p className="signup-text">Don't have an account? <Link to="/register">Sign up</Link></p>
                    <p className="signup-text">Forgot your password? <Link to="/changepassword">Change Password</Link></p>

                </form>

            </div>

            {/* <footer style={{ textAlign: 'center', padding: '20px 10px', backgroundColor: 'black', color: 'white' }}>
                <p>Copyright © 2023 Good Giving</p>
            </footer> */}
        </div>
    );

}
