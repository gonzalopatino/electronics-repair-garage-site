import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Electronics Repair Garage</div>
      <nav className="nav">
        <a href="#home" className="nav-link">Home</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#about" className="nav-link">About Us</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
