import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

// Firebase imports
import { auth } from './firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setShowLogoutPopup(false);
      alert('Logged out successfully!');
    } catch (error) {
      alert('Error logging out: ' + error.message);
    }
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#000', color: '#fff', borderBottom: '1px solid #333', position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '1000' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ fontFamily: '"playfair display", serif', fontStyle: 'italic', fontSize: '1.5rem', marginRight: '2rem', color: '#fff', textDecoration: 'none' }}>Joblink</Link>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease', position: 'relative', fontSize: '1rem', ...(location.pathname === '/' && { color: '#0ff' }) }}>Home</Link>
          <Link to="/job-listings" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease', position: 'relative', fontSize: '1rem', ...(location.pathname === '/job-listings' && { color: '#0ff' }) }}>Job listings</Link>
          <Link to="/training-courses" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease', position: 'relative', fontSize: '1rem', ...(location.pathname === '/training-courses' && { color: '#0ff' }) }}>Training & Courses</Link>
          <Link to="/plans-pricing" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease', position: 'relative', fontSize: '1rem', ...(location.pathname === '/plans-pricing' && { color: '#0ff' }) }}>Plans & Pricing</Link>
          <Link to="/blog" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease', position: 'relative', fontSize: '1rem', ...(location.pathname === '/blog' && { color: '#0ff' }) }}>Blog</Link>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease', position: 'relative', fontSize: '1rem', ...(location.pathname === '/about' && { color: '#0ff' }) }}>About</Link>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <form style={{ display: 'flex', alignItems: 'center', backgroundColor: '#000', border: '1px solid #ffffff', padding: '0.4rem' }} onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Type here to Search....." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ background: 'transparent', border: 'none', outline: 'none', color: '#fff', width: '200px', padding: '0 0.5rem' }}
          />
          <button type="submit" style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </button>
        </form>
        <div style={{ color: '#0ff', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} onClick={() => user ? setShowLogoutPopup(true) : null}>
          {user ? (
            <>
              {user.displayName || user.email.split('@')[0]}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#0ff">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </>
          ) : (
            <Link to="/login" style={{ color: '#0ff', textDecoration: 'none' }}>Log In</Link>
          )}
        </div>
      </div>

      {/* Logout Confirmation Popup */}
      {showLogoutPopup && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: '1001',
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            textAlign: 'center',
            color: '#000',
          }}>
            <p>Do you want to log out?</p>
            <div style={{ marginTop: '1rem' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogout}
                style={{ marginRight: '1rem' }}
              >
                Yes
              </Button>
              <Button
                variant="outlined"
                onClick={() => setShowLogoutPopup(false)}
              >
                No
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;