import React from "react";
import "../Sessions/Sessions.css"; 
import { useNavigate } from "react-router-dom";


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


function Favourites({ messages, cards, handleFavorite }) {
    const navigate = useNavigate();

 
    const favoritedMessages = messages.filter((message) => message.isFavorited);
    const favoritedCards = cards.filter((card) => card.isFavorited);

    return (
        <div className="desktop2">
            <div className="desktop2-bottom">
                <div className="desktop2-header">
                    <h1>Your Favorite <span>Love</span> Quotes & Images</h1>
                </div>

               
                {favoritedMessages.length > 0 ? (
                    <LoveMessages messages={favoritedMessages} onFavoriteClick={handleFavorite} />
                ) : (
                    <p>No favorite messages yet.</p>
                )}

              
                {favoritedCards.length > 0 ? (
                    <div className="session-list">
                        {favoritedCards.map((session) => (
                            <LoveCard
                                key={session.id}
                                title={session.title}
                                imageUrl={session.imageUrl}
                                onClick={() => navigate(`/session/${session.id}`)}
                                onFavoriteClick={() => handleFavorite(session, 'card')}
                                isFavorited={session.isFavorited}
                            />
                        ))}
                    </div>
                ) : (
                    <p>No favorite cards yet.</p>
                )}
            </div>
        </div>
    );
}

export default Favourites;
