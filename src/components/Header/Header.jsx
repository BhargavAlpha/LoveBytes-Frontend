import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img  src={logo} alt="logo" className='logo'/>
        </div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/favourites">Favourites</a>
          <a href="/notifications">Notifications</a>
          <a href="/profile">Profile</a>
          <a href="/help">Help</a>
          
        </div>
        <div className="hamburger" onClick={toggleMenu}>
        
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="#333"
            >
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="#333"
            >
              <path d="M18.3 5.7l-1.4-1.4L12 9.6 7.1 4.7 5.7 6.1 10.6 11 5.7 15.9l1.4 1.4L12 12.4l4.9 4.9 1.4-1.4L13.4 11l4.9-5.9z" />
            </svg>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
