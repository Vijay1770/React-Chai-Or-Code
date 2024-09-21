import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'; // Import the CSS file

export const Footer=()=>{
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-nav">
          <ul>
            <li><NavLink to="/" className="footer-link">Home</NavLink></li>
            <li><NavLink to="/about" className="footer-link">About</NavLink></li>
            <li><NavLink to="/movie" className="footer-link">Movies</NavLink></li>
            <li><NavLink to="/contact" className="footer-link">Contact</NavLink></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
        </div>
        <div className="footer-copy">
          <p>&copy; 2024 YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};