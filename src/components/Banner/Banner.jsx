import React from 'react';
import './Banner.css';
import { useNavigate } from 'react-router-dom';

const WelcomeBanner = ({ userName }) => {
    const navigate = useNavigate();

    return (
        <div className="love-welcome-banner">
            <div className="love-welcome-content">
                <h1>Welcome {userName ? `, ${userName}` : "to Love Messages"}</h1>
                <p>
                    Explore a world of romantic messages, heartfelt notes, and beautiful love images. Whether it’s for a special occasion or just because, we have the perfect message for you.
                </p>
                <button  className="love-cta-button">
                    Discover Love Messages
                </button>
            </div>
        </div>
    );
};

export default WelcomeBanner;
