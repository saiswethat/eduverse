import React from 'react';

const ChatList = ({ chats, setSelectedChat }) => {
  return (
    <ul className="chat-list list-text-center">
      {chats.map(chat => (
        <li key={chat.id} onClick={() => setSelectedChat(chat)} >
          {chat.name}
        </li>
      ))}
    </ul>
  );
};

export default ChatList;
