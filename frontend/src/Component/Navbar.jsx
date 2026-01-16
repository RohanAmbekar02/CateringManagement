import React from "react";
import "./Navbar.css";
import logo from "../assets/CMP.jpeg";

const Navbar = ({ username = "Admin", onLogout }) => {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <img src={logo} alt="Catering Management" className="navbar-logo" />
        <span className="navbar-title">Catering Management</span>
      </div>

      {/* Right: User info */}
      <div className="navbar-right">
        <span className="welcome-text">Welcome, {username}</span>
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
