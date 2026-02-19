import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <NavLink to="/dashboard" className="footer-link">
        <i className="fas fa-house"></i>
        <span>Dashboard</span>
      </NavLink>

      <NavLink to="/item" className="footer-link">
        <i className="fas fa-utensils"></i>
        <span>Items</span>
      </NavLink>

      <NavLink to="/customer" className="footer-link">
        <i className="fas fa-users"></i>
        <span>Customers</span>
      </NavLink>

      <NavLink to="/order" className="footer-link">
        <i className="fas fa-box"></i>
        <span>Orders</span>
      </NavLink>
    </footer>
  );
};

export default Footer;
