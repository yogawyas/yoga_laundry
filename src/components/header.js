import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Tutup menu saat route berubah
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Tambahkan handler untuk click overlay
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('header')) {
      closeMenu();
    }
  };

  return (
    <header 
      className={`header ${isMenuOpen ? 'menu-open' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="logo">
        <Link to="/">Yoga Laundry</Link>
      </div>
      
      <button className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
        <Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link>
        <Link to="/membership" className="nav-link" onClick={closeMenu}>Membership</Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;