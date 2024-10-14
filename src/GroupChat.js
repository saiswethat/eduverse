import React, { useState, useEffect, useRef } from "react";
import "./css/GroupChat.css";
import MemberCard from "./MemberCard";
import { FaTrashAlt } from "react-icons/fa";

function GroupChat({ group, handleLeaveGroup, handleBack ,handleDeleteGroup}) {
    const initialPosts = Array.from({ length: 10 }, (_, index) => {
        const usernames = ["User1", "User2", "User3", "User4"];
        const comments = [
            { username: "User3", text: "Great post!" },
            { username: "User4", text: "Thanks for sharing!" },
        ];

        return {
            title: `Post Title ${index + 1}`,
            description: `Description for post ${index + 1}.`,
            link: index % 2 === 0 ? `https://example.com/${index}` : "",
            username: usernames[index % usernames.length],
            comments: comments,
        };
    });

    const [posts, setPosts] = useState(initialPosts);
    const [activeTab, setActiveTab] = useState("chat");
    const [openComments, setOpenComments] = useState(new Array(initialPosts.length).fill(false));
    const [newPost, setNewPost] = useState({ title: "", description: "", link: "" });
    const [newMessage, setNewMessage] = useState("");
    const [newComment, setNewComment] = useState({});
    const initialChatMessages = Array.from({ length: 10 }, (_, index) => ({
        sender: index % 2 === 0 ? "User1" : "User2",
        text: `This is message number ${index + 1}`,
    }));

    const [chatMessages, setChatMessages] = useState(initialChatMessages);
    
    const chatMessagesEndRef = useRef(null);

    const handlePostChange = (e) => {
        const { name, value } = e.target;
        setNewPost({ ...newPost, [name]: value });
    };

    const handleAddPost = () => {
        if (newPost.title && newPost.description) {
            const postWithUsername = {
                ...newPost,
                username: "You",
                comments: [],
            };
            setPosts([...posts, postWithUsername]);
            setNewPost({ title: "", description: "", link: "" });
        }
    };

    const handleMessageChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setChatMessages([...chatMessages, { sender: "You", text: newMessage }]);
            setNewMessage("");
        }
    };

    const toggleComments = (index) => {
        const updatedOpenComments = [...openComments];
        updatedOpenComments[index] = !updatedOpenComments[index];
        setOpenComments(updatedOpenComments);
    };

    const handleCommentChange = (index, e) => {
        const { value } = e.target;
        setNewComment((prev) => ({ ...prev, [index]: value }));
    };

    const handleAddComment = (index) => {
        if (newComment[index]?.trim()) {
            const updatedPosts = [...posts];
            updatedPosts[index].comments.push({
                username: "You",
                text: newComment[index],
            });
            setPosts(updatedPosts);
            setNewComment((prev) => ({ ...prev, [index]: "" }));
        }
    };
    const handleDeletePost = (index) => {
        const updatedPosts = posts.filter((_, postIndex) => postIndex !== index);
        setPosts(updatedPosts);
    };

    const uniqueMembers = Array.from(new Set([...posts.map(post => post.username), "You"]));

    useEffect(() => {
        if (chatMessagesEndRef.current) {
            chatMessagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [chatMessages]);

    return (
        <div className="group-chat">
            <button className="back-button" onClick={handleBack}>Back</button>
            <h2 className="group-text-center">{group.name}</h2>
            <div className="tab-buttons">
                <button className={activeTab === "chat" ? "active" : ""} onClick={() => setActiveTab("chat")}>Chat</button>
                <button className={activeTab === "posts" ? "active" : ""} onClick={() => setActiveTab("posts")}>Posts</button>
                <button className={activeTab === "members" ? "active" : ""} onClick={() => setActiveTab("members")}>Members</button>
            </div>
            {activeTab === "chat" && (
                <div>
                    <div className="chat-messages">
                        {chatMessages.map((message, index) => (
                            <div
                                key={index}
                                className={`message ${message.sender === "You" ? "message-you" : "message-other"}`}
                            >
                                <span className="sender-name">{message.sender}:</span> {message.text}
                            </div>
                        ))}
                        <div ref={chatMessagesEndRef} />
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={handleMessageChange}
                            placeholder="Type a message..."
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            )}
            {activeTab === "posts" && (
                <div className="posts-section">
                    {posts.map((post, index) => (
                        <div key={index} className="post-item">
                            <div className="post-username">{post.username}</div>
                            <div className="post-content">
                                <div className="post-details">
                                    <h4>{post.title}</h4>
                                    <p>{post.description}</p>
                                    {post.link && (
                                        <a className="read-more" href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
                                    )}
                                </div>
                                <button onClick={() => toggleComments(index)}>Comments ({post.comments.length})</button>
                                <button
                                    className="group-delete-post-button"
                                    onClick={() => handleDeletePost(index)}
                                >
                                    <FaTrashAlt size={15} color="red" />
                                </button>
                            </div>
                            {openComments[index] && (
                                <div className="comments-section">
                                    {post.comments.map((comment, commentIndex) => (
                                        <div key={commentIndex} className="comment">
                                            <span className="comment-username">{comment.username}:</span> {comment.text}
                                        </div>
                                    ))}
                                    <div className="new-comment">
                                        <input
                                            type="text"
                                            value={newComment[index] || ""}
                                            onChange={(e) => handleCommentChange(index, e)}
                                            placeholder="Add a comment..."
                                        />
                                        <button onClick={() => handleAddComment(index)}>Add</button>
                                        
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="new-post-form">
                        <input
                            type="text"
                            name="title"
                            value={newPost.title}
                            onChange={handlePostChange}
                            placeholder="Post Title"
                        />
                        <textarea
                            name="description"
                            value={newPost.description}
                            onChange={handlePostChange}
                            placeholder="Post Description"
                        ></textarea>
                        <input
                            type="text"
                            name="link"
                            value={newPost.link}
                            onChange={handlePostChange}
                            placeholder="Post Link (optional)"
                        />
                        <button onClick={handleAddPost}>Add Post</button>
                    </div>
                </div>
            )}
            {activeTab === "members" && (
                <div>
                    <h3>Members:</h3>
                    {uniqueMembers.length > 0 ? (
                        <div className="members-list">
                            {uniqueMembers.map((member, index) => (
                                <MemberCard key={index} name={member} />
                            ))}
                        </div>
                    ) : (
                        <p>No members found.</p>
                    )}
                    <button className="leave-group-button" onClick={handleLeaveGroup}>Leave Group</button>
                    <button className="delete-group-button" onClick={() => handleDeleteGroup(group)}>Delete Group</button>
                </div>
            )}
        </div>
    );
}

export default GroupChat;
