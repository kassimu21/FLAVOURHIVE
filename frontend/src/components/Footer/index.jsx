import React from "react";
import "./style.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>
              Flavor<span>Hive</span>
            </h2>
          </div>
          <div className="footer-links">
            <a href="#about">About Us</a>
            <a href="#features">Features</a>
            <a href="/recipes">Recipes</a>
          </div>
          <div className="footer-social">
            <a href="https://twitter.com/flavorhive" target="_blank">
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/flavorhive"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="https://github.com/flavorhive" target="_blank">
              GitHub
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 FlavorHive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
