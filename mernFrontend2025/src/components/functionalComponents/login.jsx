import { useState } from 'react';

function Login() {
    const [isSignup, setIsSignup] = useState(false);

    return (
        <div className="login-container">
            <h1>{isSignup ? 'Signup' : 'Login'}</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                {isSignup && (
                    <>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <br />
                    </>
                )}
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" required />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <br />
                <button type="submit">{isSignup ? 'Signup' : 'Login'}</button>
                <p>
                    {isSignup ? 'Already have an account?' : "Don't have an account?"}
                    <button 
                        type="button" 
                        onClick={() => setIsSignup(!isSignup)}
                        style={{background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer', marginLeft: '5px'}}
                    >
                        {isSignup ? 'Login' : 'Signup'}
                    </button>
                </p>
            </form>
        </div>
    );
}
export default Login;
