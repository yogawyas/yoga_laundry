import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menangani scroll saat menu terbuka
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="logo">
        <Link to="/">Yoga Laundry</Link>
      </div>
      
      <button 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
        <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        <Link to="/membership" className="nav-link" onClick={() => setIsMenuOpen(false)}>Membership</Link>
      </nav>
    </header>
  );
};

export default Header;