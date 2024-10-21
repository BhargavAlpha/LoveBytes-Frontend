import React, { useState } from "react";
import "./Sessions.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import WelcomeBanner from "../Banner/Banner";
import CommunityForm from "../Community/Community";


const LoveMessages = ({ messages, onFavoriteClick }) => {
    return (
        <div className="love-messages-container">
            {messages.map((message) => (
                <div key={message.id} className="love-message-box">
                    <h3>{message.title}</h3>
                    <p>{message.message}</p>

                  
                    <svg
                        className={`favorite-icon ${message.isFavorited ? "favorited" : ""}`}
                        onClick={() => onFavoriteClick(message, 'message')} 
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M20.8 4.6c-1.2-1.2-3.1-1.2-4.3 0l-.7.7-.7-.7c-1.2-1.2-3.1-1.2-4.3 0s-1.2 3.1 0 4.3l5 5 5-5c1.2-1.2 1.2-3.1 0-4.3z" />
                    </svg>
                </div>
            ))}
        </div>
    );
};


const LoveCard = ({ imageUrl, title, onClick, onFavoriteClick, isFavorited }) => {
    return (
        <div
            className="love-card"
            style={{ backgroundImage: `url(${imageUrl})` }}
            onClick={onClick}
        >
            
            <svg
                className={`favorite-icon ${isFavorited ? "favorited" : ""}`}
                onClick={(e) => {
                    e.stopPropagation(); 
                    onFavoriteClick(); 
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M20.8 4.6c-1.2-1.2-3.1-1.2-4.3 0l-.7.7-.7-.7c-1.2-1.2-3.1-1.2-4.3 0s-1.2 3.1 0 4.3l5 5 5-5c1.2-1.2 1.2-3.1 0-4.3z" />
            </svg>

            <h2>{title}</h2>
        </div>
    );
};


function Sessions({ messages, cards, handleFavorite }) {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");  
    const [selectedType, setSelectedType] = useState("All Types");
    const [selectedMood, setSelectedMood] = useState("All Moods");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    
    const filteredMessages = messages.filter((message) => {
        const matchesSearch = message.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType === "All Types" || message.type === selectedType;
        const matchesCategory = selectedCategory === "All Categories" || message.category === selectedCategory;

        return matchesSearch && matchesType && matchesCategory;
    });

    
    const filteredCards = cards.filter((card) => {
        const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType === "All Types" || card.type === selectedType;
        const matchesMood = selectedMood === "All Moods" || card.mood === selectedMood;
        const matchesCategory = selectedCategory === "All Categories" || card.category === selectedCategory;

        return matchesSearch && matchesType && matchesMood && matchesCategory;
    });

    return (
        <>
        <WelcomeBanner userName={"Gunda"} />
        
        <div className="desktop2">
            <div className="desktop2-bottom">
                <div className="desktop2-header">
                    <h1>Heartfelt <span>Love</span> Quotes & Stunning Images: Express Your <span>Love</span></h1>
                </div>
                
                {/* Filter Bar */}
                <div className="filter-bar">
                    <div className="filter-bar-left">
                        <select
                            className="filter-item"
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                        >
                            <option>All Types</option>
                            <option>Romantic Message</option>
                            <option>Love Note</option>
                        </select>

                        <select
                            className="filter-item"
                            value={selectedMood}
                            onChange={(e) => setSelectedMood(e.target.value)}
                        >
                            <option>All Moods</option>
                            <option>Sweet</option>
                            <option>Emotional</option>
                            <option>Romantic</option>
                            <option>Affectionate</option>
                            <option>Spontaneous</option>
                        </select>

                        <select
                            className="filter-item"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option>All Categories</option>
                            <option>Morning Wishes</option>
                            <option>Long Distance</option>
                            <option>Anniversary</option>
                            <option>Valentine's Day</option>
                            <option>Random Acts of Love</option>
                        </select>
                    </div>
                    <div className="filter-bar-right">
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Search for love messages"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="search-button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="20"
                                    viewBox="0 0 19 20"
                                    fill="none"
                                >
                                    <path
                                        d="M15.3746 14.5509C15.1012 14.2776 14.658 14.2776 14.3846 14.5509C14.1113 14.8243 14.1113 15.2675 14.3846 15.5409L15.3746 14.5509ZM17.7179 18.8742C17.9912 19.1475 18.4345 19.1475 18.7078 18.8742C18.9812 18.6008 18.9812 18.1576 18.7078 17.8842L17.7179 18.8742ZM6.83722 4.12183C7.21906 4.06135 7.47958 3.70278 7.4191 3.32094C7.35862 2.9391 7.00005 2.67859 6.61821 2.73906L6.83722 4.12183ZM2.57278 6.7845C2.5123 7.16634 2.77282 7.52491 3.15466 7.58538C3.5365 7.64586 3.89506 7.38535 3.95554 7.00351L2.57278 6.7845ZM14.3846 15.5409L17.7179 18.8742L18.7078 17.8842L15.3746 14.5509L14.3846 15.5409ZM8.21289 15.1792C4.45735 15.1792 1.41289 12.1347 1.41289 8.37915H0.0128906C0.0128906 12.9079 3.68416 16.5792 8.21289 16.5792V15.1792ZM15.0129 8.37915C15.0129 12.1347 11.9684 15.1792 8.21289 15.1792V16.5792C12.7416 16.5792 16.4129 12.9079 16.4129 8.37915H15.0129ZM8.21289 1.57915C11.9684 1.57915 15.0129 4.62361 15.0129 8.37915H16.4129C16.4129 3.85042 12.7416 0.17915 8.21289 0.17915V1.57915ZM8.21289 0.17915C3.68416 0.17915 0.0128906 3.85042 0.0128906 8.37915H1.41289C1.41289 4.62361 4.45735 1.57915 8.21289 1.57915V0.17915ZM6.61821 2.73906C4.5358 3.06889 2.9026 4.70209 2.57278 6.7845L3.95554 7.00351C4.19048 5.52015 5.35386 4.35677 6.83722 4.12183L6.61821 2.73906Z"
                                        fill="#B0B0B0"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Love Messages Container */}
                <LoveMessages messages={filteredMessages} onFavoriteClick={handleFavorite} />

                {/* Image Session List */}
                <div className="session-list">
                    {filteredCards.map((session) => (
                        <LoveCard
                            key={session.id}
                            title={session.title}
                            imageUrl={session.imageUrl}
                            onClick={() => navigate(`/session/${session.id}`)} 
                            onFavoriteClick={() => handleFavorite(session, 'card')} 
                            isFavorited={session.isFavorited} 
                        />
                    ))}

                    {filteredCards.length === 0 && <p>No sessions found.</p>}
                </div>
            </div>
            <Toaster/>
        </div>
        <CommunityForm />
        </>
    );
}

export default Sessions;
