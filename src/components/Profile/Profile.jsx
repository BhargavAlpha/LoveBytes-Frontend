import React, { useState } from 'react';
import './Profile.css';

const UserProfile = () => {
    // Initial dummy data for the user profile
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        contact: '123-456-7890',
        interests: 'Music, Traveling, Reading',
        profilePic: '',
        theme: 'light',
        notifications: true,
        privacy: 'public',
    });

    const [isEditing, setIsEditing] = useState(false); // State to toggle between view and edit modes

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProfile({
            ...profile,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Handle profile picture change
    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfile({
                    ...profile,
                    profilePic: reader.result,
                });
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false); // Exit edit mode after submission
        // You can handle the profile data submission to a backend here
        console.log('Profile updated:', profile);
    };

    // Cancel editing and return to view mode
    const handleCancel = () => {
        setIsEditing(false); // Simply close the form without saving
    };

    return (
        <div className="profile-container">
            <h2>Manage Your Profile</h2>

            {/* Toggle between view and edit mode */}
            {!isEditing ? (
                <div className="profile-view">
                    {/* Display profile picture if available */}
                    {profile.profilePic && (
                        <img src={profile.profilePic} alt="Profile" className="profile-pic-preview" />
                    )}
                    <p><strong>Name:</strong> {profile.name}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Contact Number:</strong> {profile.contact}</p>
                    <p><strong>Interests:</strong> {profile.interests}</p>
                    <p><strong>Theme Preference:</strong> {profile.theme === 'light' ? 'Light' : 'Dark'}</p>
                    <p><strong>Privacy:</strong> {profile.privacy.charAt(0).toUpperCase() + profile.privacy.slice(1)}</p>
                    <p><strong>Notifications:</strong> {profile.notifications ? 'Enabled' : 'Disabled'}</p>

                    <button className="edit-button" onClick={() => setIsEditing(true)}>
                        Edit Profile
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="profile-form">
                    {/* Profile Picture */}
                    <div className="form-group">
                        <label>Profile Picture</label>
                        <input type="file" accept="image/*" onChange={handleProfilePicChange} />
                        {profile.profilePic && (
                            <img src={profile.profilePic} alt="Profile" className="profile-pic-preview" />
                        )}
                    </div>

                    {/* Name */}
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                        />
                    </div>

                    {/* Contact Information */}
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleInputChange}
                            placeholder="Your Email"
                        />
                    </div>

                    <div className="form-group">
                        <label>Contact Number</label>
                        <input
                            type="text"
                            name="contact"
                            value={profile.contact}
                            onChange={handleInputChange}
                            placeholder="Your Contact Number"
                        />
                    </div>

                    {/* Interests */}
                    <div className="form-group">
                        <label>Interests</label>
                        <input
                            type="text"
                            name="interests"
                            value={profile.interests}
                            onChange={handleInputChange}
                            placeholder="Your Interests (e.g. Music, Traveling)"
                        />
                    </div>

                    {/* Notification Settings */}
                    <div className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                name="notifications"
                                checked={profile.notifications}
                                onChange={handleInputChange}
                            />
                            Enable Notifications
                        </label>
                    </div>

                    {/* Privacy Settings */}
                    <div className="form-group">
                        <label>Privacy Settings</label>
                        <select name="privacy" value={profile.privacy} onChange={handleInputChange}>
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                            <option value="friends">Friends Only</option>
                        </select>
                    </div>

                    {/* Theme Preferences */}
                    <div className="form-group">
                        <label>Theme Preferences</label>
                        <select name="theme" value={profile.theme} onChange={handleInputChange}>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="submit-button">Save Profile</button>
                        <button type="button" className="cancel-button" onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default UserProfile;
