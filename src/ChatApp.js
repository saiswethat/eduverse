import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import SearchBar from './SearchBar';
import './css/ChatApp.css';
import Header from './Header';
import Admin_Header from './AdminHeader';
import { users } from './loadData';

const ChatApp = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const userId = sessionStorage.getItem("userId");
  if(!userId){
    alert("Please login to continue");
    window.location.href = "/login";
    return
  }
  const currentUser = users[userId];

  const chats = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eva' },
  ];
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };
  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    {(currentUser.user_type === "Admin") ? <Admin_Header /> : <Header/> }
    <div className="chat-app">
      <div className="chat-list-section">
        <SearchBar onSearch={handleSearch} />
        <ChatList chats={filteredChats} setSelectedChat={setSelectedChat} />
      </div>
      <div className="chat-window-section">
        {selectedChat ? (
          <ChatWindow chat={selectedChat} />
        ) : (
          <div className="no-chat-selected">Select a chat to start messaging</div>
        )}
      </div>
    </div>
    </>
  );
};

export default ChatApp;
