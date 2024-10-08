import React, { useState, useEffect, useRef } from 'react';
import './css/ChatWindow.css';

const ChatWindow = ({ chat }) => {
  const [messages, setMessages] = useState([
    { sender: 'Alice', text: 'Hi there!', time: '10:01 AM', type: 'received' },
    { sender: 'You', text: 'Hello!', time: '10:02 AM', type: 'sent' },
    { sender: 'Alice', text: 'How are you?', time: '10:03 AM', type: 'received' },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null); // Create a ref for the messages end

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        sender: 'You',
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'sent',
      };
      setMessages([...messages, newMsg]);
      setNewMessage(''); // clear input after sending
    }
  };

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]); // Only run when messages change

  return (
    <div className="chat-window">
      <h2>Chat with {chat.name}</h2>
      <div className="pm-chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            <p className="message-text">{msg.text}</p>
            <span className="message-time">{msg.time}</span>
          </div>
        ))}
        {/* Empty div to act as a scroll target */}
        <div ref={messagesEndRef} /> 
      </div>
      <div className="message-input-section">
        <input 
          type="text" 
          placeholder="Type a message..." 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;