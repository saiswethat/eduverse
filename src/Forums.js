import React, { useState } from "react";
import "./css/Forums.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { forums as initialForums, users } from "./loadData";

const Forums = () => {
    const currentUser = users[2];

    const [forumList, setForumList] = useState(initialForums); // Manage forum state locally
    const [showCreateForm, setShowCreateForm] = useState(false); // Toggle create form visibility
    const [newForum, setNewForum] = useState({ forum_name: "", forum_description: "" }); // New forum form state

    // Handle form submit to create a new forum
    const handleCreateForum = (e) => {
        e.preventDefault();
        const newId = forumList.length ? forumList[forumList.length - 1].forum_id + 1 : 1; // Ensure unique ID
        const createdForum = { forum_id: newId, ...newForum };
        setForumList([...forumList, createdForum]); // Update the forum list
        setNewForum({ forum_name: "", forum_description: "" }); // Reset form state
        setShowCreateForm(false); // Hide form after creation
    };

    // Handle forum deletion
    function handleDelete(forumId) {
        const confirmDelete = window.confirm("Are you sure you want to delete this forum?");
        if (confirmDelete) {
            setForumList(forumList.filter(forum => forum.forum_id !== forumId)); // Update the forum list
            console.log("Forum deleted:", forumId);
        }
    }

    return (
        <>
            <Header />
            <div className="forums-list">
                <h2>Forums</h2>
                <SearchBar />
                {currentUser.user_type !== "Student" && (
                    <button className="create-forum-btn" onClick={() => setShowCreateForm(!showCreateForm)}>
                        {showCreateForm ? "Cancel" : "Create Forum"}
                    </button>
                )}

                {showCreateForm && (
                    <form className="create-forum-form" onSubmit={handleCreateForum}>
                        <input
                            type="text"
                            placeholder="Forum Name"
                            value={newForum.forum_name}
                            onChange={(e) => setNewForum({ ...newForum, forum_name: e.target.value })}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Forum Description"
                            value={newForum.forum_description}
                            onChange={(e) => setNewForum({ ...newForum, forum_description: e.target.value })}
                            required
                        />
                        <button type="submit">Create</button>
                    </form>
                )}
                <br />

                <div className="forums-grid">
                    {forumList.map((forum) => ( // Render from forumList state
                        <div className="forum-box" key={forum.forum_id}>
                            <h3>{forum.forum_name}</h3>
                            <p>{forum.forum_description}</p>
                            <div className="button-group">
                                <button className="go-to-forum-btn"
                                    onClick={() => window.location.href = `/forums/${forum.forum_id}`}
                                >
                                    Go to Forum
                                </button>
                                {currentUser.user_type !== "Student" && (
                                    <button className="delete-forum-btn" onClick={() => handleDelete(forum.forum_id)}>
                                        Delete Forum
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Forums;
