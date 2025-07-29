import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Corrected path
import './Header.css'; // Corrected CSS file


const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <Link to="/" className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="brand-name">ELECTRONICS REPAIR GARAGE</span>
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
