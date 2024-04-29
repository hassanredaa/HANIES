export default function Login() {
    return (
        <body>
            <div class="login-container">
                <form action="/submit-your-login-form" method="POST">

                    <h3> <a href="#">Not An Admin</a> </h3>

                    <h2>Admin Login</h2>

                    <p class="input-group">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required placeholder="Please Enter Your Username" />
                    </p>
                    <p class="input-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required placeholder="Please Enter Your Password" />
                    </p>
                    <button type="submit">Log In</button>
                    <p class="signup-text">Don't have an account? <a href="#">Sign up</a></p>
                </form>
            </div>

            <footer>
                <p>Copyright © 2023 Aid Avenue</p>
            </footer>
        </body>
    );

} 

