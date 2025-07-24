import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Electronics Repair Garage Logo" className="logo" />
        <span className="site-title">ELECTRONICS REPAIR GARAGE</span>
      </div>
      <nav className="nav-links">
        <a href="/" className="nav-item">Home</a>
        <a href="/services" className="nav-item">Services</a>
        <a href="/about" className="nav-item">About Us</a>
        <a href="/contact" className="nav-item">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
