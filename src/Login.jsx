import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="app-container"> {/* Single outermost container */}

            <div className="login-container">
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

            <footer>
                <p>Copyright © 2023 Aid Avenue</p>
            </footer>
        </div>
    );
}
