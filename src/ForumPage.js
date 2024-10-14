import React, { useState } from "react";
import "./css/ForumPage.css";
import { useParams } from "react-router-dom";
import { postsData, forums, users } from "./loadData";
import Header from "./Header";
import { FaTrashAlt } from "react-icons/fa";

const ForumPage = () => {
    var { forum_id } = useParams();
    forum_id = parseInt(forum_id, 10);

    const [posts, setPosts] = useState(postsData.filter(post => post.forum_id === forum_id));
    const [openComments, setOpenComments] = useState(new Array(postsData.length).fill(false));
    const [newPost, setNewPost] = useState({ title: "", content: "", link: "" });
    const [newComment, setNewComment] = useState({});

    /* Check for valid session */
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
        alert("Please login to continue");
        window.location.href = "/login";
        return
    }
    const currentUser = users[userId];

    const handleAddPost = (e) => {
        e.preventDefault();
        if (newPost.title.trim() && newPost.content.trim()) {
            const postToAdd = {
                post_id: posts.length + 1,
                posted_by: currentUser.user_name,
                posted_date: new Date().toLocaleDateString(),
                posted_time: new Date().toLocaleTimeString(),
                forum_id: forum_id,
                title: newPost.title,
                content: newPost.content,
                link: newPost.link || "",
                comments: []
            };
            setPosts([...posts, postToAdd]);
            setNewPost({ title: "", content: "", link: "" }); 
        }
    };

    const handleDeletePost = (postId) => {
        const updatedPosts = posts.filter(post => post.post_id !== postId);
        setPosts(updatedPosts);
    };

    const handlePostChange = (e) => {
        const { name, value } = e.target;
        setNewPost({ ...newPost, [name]: value });
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

    return (
        <>
            <Header />
            <div className="forum-page">
                <h2>{forums[forum_id - 1].forum_name}</h2>
                <p>{forums[forum_id - 1].forum_description}</p>

                <h3>Posts</h3>

                <div className="posts-section">
                    {posts.map((post, index) => (
                        <div key={index} className="post-item">
                            <div className="post-username">{post.posted_by}</div>
                            <div className="post-content">
                                <div className="post-details">
                                    <h4>{post.title}</h4>
                                    <p>{post.content}</p>
                                    {post.link && (
                                        <a className="read-more" href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
                                    )}
                                </div>
                                <button onClick={() => toggleComments(index)}>Comments ({post.comments.length})</button>

                                {/* Delete Icon - Positioned in the right */}
                                <button
                                    className="delete-post-button"
                                    onClick={() => handleDeletePost(post.post_id)}
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
                    <hr></hr>
                    <div className="new-post-form">
                        <form onSubmit={handleAddPost}>
                            <input
                                type="text"
                                name="title"
                                value={newPost.title}
                                onChange={handlePostChange}
                                placeholder="Post Title"
                                required
                            />
                            <textarea
                                name="content"
                                value={newPost.content}
                                onChange={handlePostChange}
                                placeholder="Post Description"
                                required
                            ></textarea>
                            <input
                                type="text"
                                name="link"
                                value={newPost.link}
                                onChange={handlePostChange}
                                placeholder="Post Link (optional)"
                            />
                            <br></br>
                            <button type="submit">Add Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForumPage;
