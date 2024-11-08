import React from 'react';
import './Footer.css'; // Importing the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo-section">
                    <img src="logo.png" alt="Gokaddal Technologies Logo" className="footer-logo" />
                    <p className="footer-description">World's First Digital Solutions Exchange Cloud Platform</p>
                    <p className="footer-description-1">Digital Transformation Realized: Faster, Economical and Automated.</p>
                    <p className="footer-description-1">Enabling Global reach of your Digital Transformation Solutions</p>
                    <div className="footer-links">
                        <a href="#">Contact Us</a> | <a href="#">Privacy Policy</a> | <a href="#">FAQs</a> | <a href="#">About Us</a> | <a href="#">Terms & Conditions</a>
                    </div>
                </div>

                <div className="footer-columns">
                    <div className="footer-column">
                        <h3>Industries</h3>
                        <ul>
                            <li><a href="#">Real Estate</a></li>
                            <li><a href="#">Manufacturing</a></li>
                            <li><a href="#">Banking & Finance</a></li>
                            <li><a href="#">Retail</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Agritech</a></li>
                            <li><a href="#">Mining & Ports</a></li>
                            <li><a href="#">Media & Entertainment</a></li>
                        </ul>
                       
                    </div>
                    <div className="footer-column-2">
                        
                       
                        <ul>
                            <li><a href="#">Smart Cities</a></li>
                            <li><a href="#">Healthcare</a></li>
                            <li><a href="#">Public Sector Services</a></li>
                            <li><a href="#">Transportation</a></li>
                            <li><a href="#">Utilities & Energy</a></li>
                            <li><a href="#">FoodTech</a></li>
                            <li><a href="#">Hospitality</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Domains</h3>
                        <ul>
                            <li><a href="#">Artificial Intelligence</a></li>
                            <li><a href="#">Augmented Reality</a></li>
                            <li><a href="#">Automation</a></li>
                            <li><a href="#">Analytics</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-data">©Copyright 2024 | All rights Reserved | Powered by Speed Tech</p>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
