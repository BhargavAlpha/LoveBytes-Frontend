import React, { useState } from 'react';
import './Help.css';

const HelpAndSupport = () => {
    const [feedback, setFeedback] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFeedback({ ...feedback, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle feedback submission to your backend
        setSubmitted(true);
    };

    return (
        <div className="help-support-container">
            <h2>Help and Support</h2>

            <div className="help-section">
                <h3>Tutorials</h3>
                <p>Here are some tutorials to help you get started:</p>
                <ul>
                    <li><a href="#tutorial1">How to create a profile</a></li>
                    <li><a href="#tutorial2">How to send a message</a></li>
                    <li><a href="#tutorial3">Managing your notifications</a></li>
                </ul>
            </div>

            <div className="help-section">
                <h3>FAQs</h3>
                <div className="faq">
                    <p><strong>Q: How do I change my profile picture?</strong></p>
                    <p>A: You can change your profile picture in the 'Profile Settings' section of the app.</p>
                </div>
                <div className="faq">
                    <p><strong>Q: How do I reset my password?</strong></p>
                    <p>A: Click 'Forgot Password' on the login screen, and follow the instructions to reset your password.</p>
                </div>
                <div className="faq">
                    <p><strong>Q: Can I turn off notifications?</strong></p>
                    <p>A: Yes, you can manage your notification preferences in the 'Settings' section of the app.</p>
                </div>
            </div>

            <div className="help-section">
                <h3>Contact Support</h3>
                <p>If you need further assistance, feel free to contact us:</p>
                <p>Email: support@example.com</p>
                <p>Phone: +123 456 7890</p>
            </div>

            <div className="help-section feedback-section">
                <h3>Submit Feedback</h3>
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="feedback-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={feedback.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={feedback.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={feedback.message}
                                onChange={handleInputChange}
                                rows="4"
                                placeholder="Your suggestions or issues..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                ) : (
                    <p className="thank-you-message">Thank you for your feedback! We will review it shortly.</p>
                )}
            </div>
        </div>
    );
};

export default HelpAndSupport;
