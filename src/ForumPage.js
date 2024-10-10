import React, { useState } from "react";
import "./css/ForumPage.css";
import { useParams } from "react-router-dom";
import { postsData, forums } from "./loadData";
import Header from "./Header";

const ForumPage = () => {
    var { forum_id } = useParams();
    forum_id = parseInt(forum_id);

    const [posts, setPosts] = useState(postsData.filter(post => post.forum_id === forum_id));
    const [newPostContent, setNewPostContent] = useState("");

    const handleNewPostSubmit = (e) => {
        e.preventDefault();
        if (newPostContent.trim()) {
            const newPost = {
                post_id: posts.length + 1,
                posted_by: "Current User",
                posted_date: new Date().toLocaleDateString(),
                posted_time: new Date().toLocaleTimeString(),
                forum_id: forum_id,
                content: newPostContent,
            };
            setPosts([...posts, newPost]);
            setNewPostContent("");
        }
    };

    return (
        <>
            <Header />
            <div className="forum-page">
                {console.log(forums)}
                <h2>{forums[forum_id - 1].forum_name}</h2>
                <p>{forums[forum_id - 1].forum_description}</p>

                <h3>Posts</h3>
                <div className="posts-list">
                    {console.log(posts)}
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div className="post-box" key={post.post_id}>
                                <h4>{post.posted_by}</h4>
                                <p>{post.content}</p>
                                <small>
                                    Posted on {post.posted_date} at {post.posted_time}
                                </small>
                            </div>
                        ))
                    ) : (
                        <p>No posts available. Be the first to post!</p>
                    )}
                </div>

                <div className="new-post-form">
                    <h3>Create a New Post</h3>
                    <form onSubmit={handleNewPostSubmit}>
                        <textarea
                            value={newPostContent}
                            onChange={(e) => setNewPostContent(e.target.value)}
                            placeholder="Write your post here..."
                        />
                        <button type="submit">Submit Post</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ForumPage;