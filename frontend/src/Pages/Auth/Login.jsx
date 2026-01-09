import './Login.css';

import React from 'react';

const Login = () => {
  return (
    <div className="login-page">
      <h2>Catering Management Login</h2>
      <form>
        <div className="input-group">
          <label>Username:</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <br />
        <div className="input-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter password"/>
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;