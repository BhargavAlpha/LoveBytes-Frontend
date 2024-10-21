import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sessions from './components/Sessions/Sessions';
import Favourites from './components/Favourites/Favourites';
import Notifications from './components/Notifications/Notifications';
import AnalyticsDashboard from './components/Dashbaord/Dashboard';
import Profile from './components/Profile/Profile';
import { sessionsData } from './utils/sessionsData';
import toast, { Toaster } from 'react-hot-toast'; 
import Footer from './components/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HelpAndSupport from './components/Help/Help';


function App() {
  const getStoredCards = () => JSON.parse(localStorage.getItem('cards')) || sessionsData.cards;
  const getStoredMessages = () => JSON.parse(localStorage.getItem('messages')) || sessionsData.messages;

  const [cards, setCards] = useState(getStoredCards);
  const [messages, setMessages] = useState(getStoredMessages);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  
  const handleFavorite = (session, type) => {
    session.isFavorited = !session.isFavorited;

    
    if (session.isFavorited) {
      toast.success(`${session.title} added to favorites!`);
    } else {
      toast.error(`${session.title} removed from favorites!`);
    }

    
    if (type === 'card') {
      setCards((prevCards) => prevCards.map(card => card.id === session.id ? session : card));
    } else if (type === 'message') {
      setMessages((prevMessages) => prevMessages.map(message => message.id === session.id ? session : message));
    }
  };

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route 
            path='/' 
            element={
              <Sessions 
                cards={cards} 
                messages={messages} 
                handleFavorite={handleFavorite} 
              />
            } 
          />
          <Route 
            path='/favourites' 
            element={
              <Favourites 
                cards={cards.filter(card => card.isFavorited)} 
                messages={messages.filter(message => message.isFavorited)} 
                handleFavorite={handleFavorite} 
              />
            } 
          />
          <Route 
           path='/notifications'
            element={
              <Notifications />
            }
          />
          <Route 
           path='/dashboard'
            element={
              <AnalyticsDashboard />
            }
          />
          <Route 
           path='/profile'
            element={
              <Profile />
            }
          />
          <Route 
           path='/help'
            element={
              <HelpAndSupport />
            }
          />
        </Routes>
      </Router>
      <Footer />

      
      <Toaster />
    </>
  );
}

export default App;
