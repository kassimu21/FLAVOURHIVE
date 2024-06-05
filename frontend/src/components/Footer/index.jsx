import React from "react";
import "./style.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <a href="/">
            <div className="footer-logo">
              <h6>
                Flavor<span>Hive</span>
              </h6>
            </div>
          </a>

          <div className="footer-links">
            <a href="#about">About Us</a>
            <a href="#features">Features</a>
            <a href="/recipes">Recipes</a>
            <a href="#top">Back To Top</a>
          </div>
          <div className="footer-social">
            <a href="/">Twitter</a>
            <a href="/">LinkedIn</a>
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
