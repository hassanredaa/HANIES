
// import React from 'react';
// import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <body>
            <div class="login-container">
                <form action="/submit-your-login-form" method="POST">

                    <h2> Login</h2>

                    <p class="input-group">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required placeholder="Please Enter Your Username" />
                    </p>
                    <p class="input-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required placeholder="Please Enter Your Password" />
                    </p>
                    <button type="submit">Log In</button>
                    <p className="signup-text">Don't have an account? <Link to="/Register">Sign up</Link></p>
                    <p class="signup-text">Forgot your password? <a href="#">Change Password</a></p>

                </form>
            </div>

            <footer>
                <p>Copyright © 2023 Aid Avenue</p>
            </footer>
        </body>
    );

} 