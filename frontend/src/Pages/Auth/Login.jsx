import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="profile-icon" style={{
          backgroundColor: 'rgb(185, 8, 185)', 
          width: '70px', height: '70px', 
          borderRadius: '50%', margin: '0 auto 15px',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          fontSize: '35px', color: 'white'
        }}>👤</div>
        
        <h2 className="title">Welcome Back!</h2>
        <p style={{color: '#666', marginBottom: '25px'}}>Log in to your account</p>

        <form className="login-form">
          <div className="input-group">
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
          </div>

          <div className="form-options" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '14px'}}>
            <label style={{cursor: 'pointer'}}><input type="checkbox" /> Remember Me</label>
            <a href="#" style={{color: '#7c5dfa', textDecoration: 'none', fontWeight: 'bold'}}>Forgot Password?</a>
          </div>

          <button type="submit" className="login-button">Log In</button>
        </form>

        <p style={{marginTop: '25px', fontSize: '14px', color: '#555'}}>
          Don't have an account? <a href="#" style={{color: '#7c5dfa', fontWeight: 'bold', textDecoration: 'none'}}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;