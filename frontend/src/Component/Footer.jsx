import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <NavLink to="/dashboard" className="footer-link">
        <span>🏠</span>
        <p>Dashboard</p>
      </NavLink>

      <NavLink to="/items" className="footer-link">
        <span>🍽️</span>
        <p>Items</p>
      </NavLink>

      <NavLink to="/customers" className="footer-link">
        <span>👥</span>
        <p>Customers</p>
      </NavLink>

      <NavLink to="/orders" className="footer-link">
        <span>📦</span>
        <p>Orders</p>
      </NavLink>
    </footer>
  );
};

export default Footer;
