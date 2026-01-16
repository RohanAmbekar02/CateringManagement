<<<<<<< HEAD
function Login() {
    return (
        <div>
            <h1>Login Page</h1>
        </div>
    )
}export default Login;
=======
import React from 'react';
import './Login.css';
import Swal from 'sweetalert2';
import { Mail, Lock, User } from 'lucide-react';

const Login = () => {

  const handleLogin = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Success!',
      text: 'You are successfully login!',
      icon: 'success',
      confirmButtonText: 'Ok',
      confirmButtonColor: 'rgb(185, 8, 185)', 
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="profile-icon-container" style={{
          backgroundColor: 'rgb(185, 8, 185)', 
          width: '80px', height: '80px', 
          borderRadius: '50%', margin: '0 auto 15px',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}>
          <User size={40} color="white" />
        </div>
        
        <h2 className="title">Welcome Back!</h2>
        <p style={{color: '#666', marginBottom: '25px'}}>Log in to your account</p>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group" style={{ position: 'relative', marginBottom: '15px' }}>
            <Mail size={20} color="rgb(185, 8, 185)" style={{ position: 'absolute', left: '15px', top: '15px' }} />
            <input 
              type="email" 
              placeholder="Email Address" 
              required 
              className="login-input"
            />
          </div>

          <div className="input-group" style={{ position: 'relative', marginBottom: '15px' }}>
            <Lock size={20} color="rgb(185, 8, 185)" style={{ position: 'absolute', left: '15px', top: '15px' }} />
            <input 
              type="password" 
              placeholder="Password" 
              required 
              className="login-input"
            />
          </div>

          <div className="form-options">
            <label style={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}>
              <input type="checkbox" style={{marginRight: '8px'}} /> Remember Me
            </label>
            <a href="#" style={{color: 'rgb(185, 8, 185)', textDecoration: 'none', fontWeight: 'bold'}}>Forgot Password?</a>
          </div>

          <button type="submit" className="login-button">Log In</button>
        </form>

        <p style={{marginTop: '25px', fontSize: '14px', color: '#555'}}>
          Don't have an account? <a href="#" style={{color: 'rgb(185, 8, 185)', fontWeight: 'bold', textDecoration: 'none'}}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
>>>>>>> 24d82f9928b4e554695f237bf2e65eeeeaa7199b
