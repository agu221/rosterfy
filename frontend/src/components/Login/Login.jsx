import React, { useState } from "react";
import styles from '../../styles/Login.module.css'
import shared from '../../styles/_shared.module.css'
import logo from '../../assets/logo.png'
import { loginUser } from "../../api/auth";

const Login = () => {
    const [emailOrUserName, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!emailOrUserName || !password) {
            setError('All fields are required');
            return;
        }
        try {
            const data = await loginUser(emailOrUserName, password);
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            window.location.href = '/user-dashboard';
        } catch (error) {
            console.error('Error during login:', error.response?.data || error.message);
            setError("Invalid credentials. Please try again.");
        }
    }

    return (
        <div className={shared.pageWrapper}>
            <div className={styles.loginContainer}>
                <img src={logo} alt="Rosterfy Logo" className={styles.logo} />
                <div className={styles.slogan}>Manage your team</div>

                <form onSubmit={handleLogin}>
                    <label htmlFor="emailOrUsername" className={shared.formLabel}>Email/Username</label>
                    <input
                        id="emailOrUsername"
                        type="text"
                        placeholder="Email/Username"
                        value={emailOrUserName}
                        onChange={(e) => setEmailOrUsername(e.target.value)}
                        required
                    />
                    <label htmlFor="password" className={shared.formLabel}>Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className={styles.loginButton}>
                        Login
                    </button>
                </form>
                {error && <p className={shared.error}>{error}</p>}
                <div className={styles.linkRow}>
                    <a href="#">Forgot password?</a>
                    <a href="/register">Become a member!</a>
                </div>


                <div className={shared.socialLogin}>
                    <button className={shared.socialButton}>
                        <img src="https://img.icons8.com/color/20/google-logo.png" alt="Google" /> Sign in with Google
                    </button>
                    <button className={shared.socialButton}>
                        <img src="https://img.icons8.com/ios-filled/20/000000/facebook-new.png" alt="Facebook" /> Sign in with Facebook
                    </button>
                    <button className={shared.socialButton}>
                        <img src="https://img.icons8.com/ios-filled/20/mac-os.png" alt="Apple" /> Sign in with Apple
                    </button>
                    <button className={shared.socialButton}>
                        <img src="https://img.icons8.com/ios-filled/20/000000/lock--v1.png" alt="SSO" /> Sign in with SSO
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;