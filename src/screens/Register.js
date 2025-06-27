import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register-container">

      <h2>Register your Account</h2>
      <form>
        <label>Full Name</label>
        <input type="text" placeholder="Enter Your Full Name" required />

        <label>Email Address</label>
        <input type="email" placeholder="Enter Email Address" required />

        <label>Your Password</label>
        <input type="password" placeholder="Enter Your Password" required />

        <label>Confirm Password</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm Your Password"
            required
          />
          <span className="toggle-icon" onClick={togglePassword}>
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <button type="submit">Register</button>

        <p className="login-text">
          Already have an account? <a href="#">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Register;
