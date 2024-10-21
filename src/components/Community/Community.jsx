import React, { useState } from 'react';
import './Community.css';

const CommunityForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [questions, setQuestions] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setQuestions([...questions, inputValue]);
            setInputValue(''); 
        }
    };

    return (
        <div className="community-form-container">
            <h2>Community Questions</h2>
            <form className="community-form" onSubmit={handleSubmit}>
                <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your question or comment here..."
                    rows="4"
                    className="community-textarea"
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>

            <div className="questions-list">
                {questions.length > 0 ? (
                    questions.map((question, index) => (
                        <div key={index} className="question-item">
                            {question}
                        </div>
                    ))
                ) : (
                    <p className="no-questions">No questions yet. Be the first to ask!</p>
                )}
            </div>
        </div>
    );
};

export default CommunityForm;
