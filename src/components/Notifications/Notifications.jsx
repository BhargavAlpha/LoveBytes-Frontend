import React from 'react';
import './Notifications.css'; 
import { toast } from 'react-hot-toast';

const notifications = [
    {
        id: 1,
        title: "New Love Message!",
        message: "Good morning, my love! Every day with you is a blessing. ❤️",
        time: "2 hours ago"
    },
    {
        id: 2,
        title: "Reminder",
        message: "Don't forget to send a sweet message to your loved one today! 💌",
        time: "1 day ago"
    },
    {
        id: 3,
        title: "New Message Idea",
        message: "Missing someone? Let them know with a heartfelt message. 💖",
        time: "3 days ago"
    },
    {
        id: 4,
        title: "Anniversary Alert",
        message: "Celebrate love! Send an anniversary message to your partner. 🎉",
        time: "5 days ago"
    }
];

const Notifications = () => {
    const handleButtonClick = () => {
        toast.success('Demo notification displayed!');
    }
    return (
        <div className="notifications-container">
            <div style={{display:"flex", justifyContent:'space-between'}}>
               <h2>Notifications</h2>
               <button className="beautiful-button" onClick={handleButtonClick}>Click me!</button>
            </div>
            
            {notifications.map((notification) => (
                <div key={notification.id} className="notification-box">
                    <h4>{notification.title}</h4>
                    <p>{notification.message}</p>
                    <span className="notification-time">{notification.time}</span>
                </div>
            ))}
        </div>
    );
};

export default Notifications;
