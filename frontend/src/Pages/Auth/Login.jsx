import './Login.css';

import React from 'react';

const Login = () => {
  return (
    <div className="login-page">
      <h2>Catering Management Login</h2>
      <form>
        <div className="input-group">
          <label>युजरनेम:</label>
          <input type="text" placeholder="तुमचे नाव टाका" />
        </div>
        <br />
        <div className="input-group">
          <label>पासवर्ड:</label>
          <input type="password" placeholder="पासवर्ड टाका" />
        </div>
        <br />
        <button type="submit">लॉगिन करा</button>
      </form>
    </div>
  );
};

export default Login;