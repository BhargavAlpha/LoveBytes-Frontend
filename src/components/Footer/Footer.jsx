import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>
                        Love Messages is your go-to source for heartfelt notes, romantic messages, and quotes for your loved ones. Whether you're looking for inspiration or just want to express your feelings, we've got you covered.
                    </p>
                </div>

                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: love@messages.com</p>
                    <p>Phone: +123 456 789</p>
                </div>

                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Love Messages | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
