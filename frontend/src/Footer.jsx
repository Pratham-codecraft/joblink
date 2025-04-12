import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-title"><i>Job Link</i></h3>
            <p className="footer-description">
              Empowering careers through education, training, and opportunities.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" className="social-icon" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="social-icon" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="social-icon" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/job-listings">Job Listings</Link></li>
              <li><Link to="/training-courses">Training Courses</Link></li>
              <li><Link to="/plans-pricing">Plans & Pricing</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
          
          
          
          <div className="footer-column">
            <h4 className="footer-heading">Contact Us</h4>
            <p className="contact-info">
              <i className="fas fa-map-marker-alt"></i> 304 amul complex,SBR
            </p>
            <p className="contact-info">
              <i className="fas fa-phone-alt"></i> +91 9898183049
            </p>
            <p className="contact-info">
              <i className="fas fa-envelope"></i> info@joblink.com
            </p>
            <div className="newsletter">
              <h5 className="newsletter-title">Subscribe to our newsletter</h5>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email" className="newsletter-input" />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Joblink. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#!">Privacy Policy</a>
            <a href="#!">Terms of Service</a>
            <a href="#!">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;