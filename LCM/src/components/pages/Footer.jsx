import "../../assets/css/Footer.css";
import React from "react";
import logo from "../../assets/image/adalet-logo-png_seeklogo-341382.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-section about">
          <img src={logo} alt="Legal Consultation Logo" className="footer-logo" />
          <p>Connecting you with trusted legal professionals anytime, anywhere.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/book-appointment">Book Appointment</a></li>
            <li><a href="/lawyers">Lawyers</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h4>Contact</h4>
          <address>
            128 Legal Street, Law City<br />
            Email: support@legalmarketplace.com<br />
            Phone: 079 2325 5811
          </address>
        </div>

        {/* Social Icons */}
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Legal Consultation Marketplace. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;