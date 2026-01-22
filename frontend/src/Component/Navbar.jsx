import React from "react";
import { useNavigate } from "react-router-dom"; // for redirect
import "./Navbar.css";
import logo from "../assets/CMP.jpeg";

const Navbar = ({ username = "Admin" }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
      navigate("/"); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="CMP" className="navbar-logo" />
        <span className="navbar-title">Catering Management</span>
      </div>

      <div className="navbar-right">
       <h4><span className="welcome-text">Hi, {username}</span></h4>
   
        <i
          className="fas fa-sign-out-alt logout-icon"
          title="Logout"
          onClick={handleLogout}
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;
