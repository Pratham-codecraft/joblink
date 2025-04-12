import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality
  };

  return (
    <nav className="navbar fixed-navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">Joblink</Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/')}`} style={{color: '#0ff'}}>Home</Link>
          <Link to="/job-listings" className={`nav-link ${isActive('/job-listings')}`}>Job listings</Link>
          <Link to="/training-courses" className={`nav-link ${isActive('/training-courses')}`}>Training & Courses</Link>
          <Link to="/plans-pricing" className={`nav-link ${isActive('/plans-pricing')}`}>Plans & Pricing</Link>
          <Link to="/blog" className={`nav-link ${isActive('/blog')}`}>Blog</Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
        </div>
      </div>
      <div className="navbar-right">
        <form className="search-box" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Type here to Search....." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </button>
        </form>
        <div className="login-btn">
          <span>Log In</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#0ff">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;