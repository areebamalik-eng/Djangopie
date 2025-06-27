import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <h2>Login to your Account</h2>
      <form>
        <label>Email Address</label>
        <input type="email" placeholder="Enter Email Address" required />

        <label>Password</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Your Password"
            required
          />
          <span className="toggle-icon" onClick={togglePassword}>
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit">Login</button>

        <p className="signup-text">
          You don’t have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
