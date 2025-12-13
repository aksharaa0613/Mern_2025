function Login() {
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" required />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"required />
                </div>
                <br />
                <button type="submit">Login</button>
                <p>Don't have an account? <a href="/signup">Signup</a></p>
            </form>
        </div>
    );
}
export default Login;
