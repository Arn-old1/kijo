import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <FaHome className="footer-icon" />
          <span>Kijo</span>
        </div>

        <ul className="footer-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#residences">Residences</a></li>
          <li><a href="#value">Value</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Kijo. All rights reserved.</p>
    </footer>
  );
};

export default Footer;