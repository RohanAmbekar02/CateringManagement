import React from 'react';
import './Login.css';
import Swal from 'sweetalert2';
// १. आयकॉन्स इंपोर्ट करा
import { Mail, Lock, User } from 'lucide-react';

const Login = () => {

  const handleLogin = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Success!',
      text: 'तुम्ही यशस्वीरित्या लॉगिन झाले आहात!',
      icon: 'success',
      confirmButtonText: 'Ok',
      confirmButtonColor:  rgb(185, 8, 185),
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* युजर आयकॉन */}
        <div className="profile-icon-container" style={{
          backgroundColor:  rgb(185, 8, 185), 
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
          {/* ईमेल इनपुट विथ आयकॉन */}
          <div className="input-group" style={{ position: 'relative', marginBottom: '15px' }}>
            <Mail size={20} color="#7c5dfa" style={{ position: 'absolute', left: '15px', top: '15px' }} />
            <input 
              type="email" 
              placeholder="Email Address" 
              required 
              style={{ paddingLeft: '45px', width: '100%', height: '50px', borderRadius: '12px', border: '1px solid #ddd' }}
            />
          </div>

          {/* पासवर्ड इनपुट विथ आयकॉन */}
          <div className="input-group" style={{ position: 'relative', marginBottom: '15px' }}>
            <Lock size={20} color="#7c5dfa" style={{ position: 'absolute', left: '15px', top: '15px' }} />
            <input 
              type="password" 
              placeholder="Password" 
              required 
              style={{ paddingLeft: '45px', width: '100%', height: '50px', borderRadius: '12px', border: '1px solid #ddd' }}
            />
          </div>

          <div className="form-options" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '14px'}}>
            <label style={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}>
              <input type="checkbox" style={{marginRight: '8px'}} /> Remember Me
            </label>
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