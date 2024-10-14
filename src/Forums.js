import React, { useState } from "react";
import "./css/Forums.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { forums as initialForums, users } from "./loadData";

const Forums = () => {
    const [forumList, setForumList] = useState(initialForums); 
    const [showCreateForm, setShowCreateForm] = useState(false); 
    const [newForum, setNewForum] = useState({ forum_name: "", forum_description: "" }); 

    const userId = sessionStorage.getItem("userId");
    if (!userId) {
        alert("Please login to continue");
        window.location.href = "/login";
        return
    }
    const currentUser = users[userId];

    const handleCreateForum = (e) => {
        e.preventDefault();
        const newId = forumList.length ? forumList[forumList.length - 1].forum_id + 1 : 1; 
        const createdForum = { forum_id: newId, ...newForum };
        setForumList([...forumList, createdForum]); 
        setNewForum({ forum_name: "", forum_description: "" }); 
        setShowCreateForm(false);
    };

    function handleDelete(forumId) {
        const confirmDelete = window.confirm("Are you sure you want to delete this forum?");
        if (confirmDelete) {
            setForumList(forumList.filter(forum => forum.forum_id !== forumId));
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
                            placeholder="New Forum Name"
                            value={newForum.forum_name}
                            onChange={(e) => setNewForum({ ...newForum, forum_name: e.target.value })}
                            required
                        />
                        <input
                            type="text"
                            placeholder="New Forum Description"
                            value={newForum.forum_description}
                            onChange={(e) => setNewForum({ ...newForum, forum_description: e.target.value })}
                            required
                        />
                        <button type="submit">Create</button>
                    </form>
                )}
                <br />

                <div className="forums-grid">
                    {forumList.map((forum) => (
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
