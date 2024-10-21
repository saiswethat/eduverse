import React, { useState, useEffect } from "react";
import "./css/Tips.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { FaTrashAlt } from "react-icons/fa";
import { users, tips as InitialTips } from "./loadData";

function Tips() {
  const currentUser = users[1];
  const [tips, setTips] = useState(InitialTips);
  const [randomTip, setRandomTip] = useState(null);
  const [newTip, setNewTip] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);


  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setRandomTip(tips[randomIndex]);
  }, [tips]);

  if (!sessionStorage.getItem("userId")) {
    alert("Please login to continue");
    window.location.href = "/login";
    return
  }

  const handleDeleteTips = (tipId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this tip?");
    if (confirmDelete) {
      setTips(tips.filter((tip) => tip.id !== tipId));
    }
  };

  const handleCreateTip = () => {
    if (newTip.trim() && shortDescription.trim()) {
      const newTipObj = {
        id: tips.length + 1,
        shortDescription: shortDescription.substring(0, 50),
        content: newTip,
        postedBy: 1,
        postedDate: new Date().toISOString().split('T')[0],
      };
      setTips([...tips, newTipObj]);
      setNewTip("");
      setShortDescription("");
      setShowCreateForm(false);
    }
  };

  return (
    <>
      <Header />
      <div className="tips-tips-page">
        {(currentUser.user_type === "Student") && randomTip && (
          <div className="tips-random-tip">
            <h2>Tip of the Day</h2>
            <div className="tips-tip-card">
              <p>{randomTip.content}</p>
              <div className="tips-posted-by">
                {users[randomTip.postedBy] ? (
                  <span>{`Posted by: ${users[randomTip.postedBy].user_name} on ${randomTip.postedDate}`}</span>
                ) : (
                  <span>User not found</span>
                )}
              </div>
            </div>
          </div>
        )}
        <h2>All Tips</h2>
        {(sessionStorage.getItem("userRole") !== "Student") &&
          <button className="create-tip-button" onClick={() => setShowCreateForm(true)}>
            Create Tip
          </button>
        }
        {showCreateForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Add Your Tip</h3>
              <form onSubmit={(e) => { e.preventDefault(); handleCreateTip(); }}>
                <input
                  type="text"
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  placeholder="Enter short description"
                  className="create-tip-input"
                  required
                />
                <textarea
                  value={newTip}
                  onChange={(e) => setNewTip(e.target.value)}
                  placeholder="Enter your tip here"
                  className="create-tip-input"
                  required
                />
                <div>
                  <button type="submit" className="submit-tip-button">
                    Submit
                  </button>
                  <button type="button" onClick={() => setShowCreateForm(false)} className="cancel-tip-button">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <SearchBar />
        <div className="tips-list">
          {tips.map((tip) => (
            <div key={tip.id} className="tips-tip-card">
              <div className="tips-tip-content">
                <h3>{tip.shortDescription}</h3>
                <p>
                  {tip.content.length > 100 ? (
                    <>
                      {tip.content.substring(0, 100)}...
                      <a href={`/tips/${tip.id}`} className="view-full-content" target="_blank">View Full Content</a>
                    </>
                  ) : (
                    tip.content
                  )}
                </p>
              </div>
              <div className="tips-tip-poster">
                {users[tip.postedBy] ? (
                  <span>{`Posted by: ${users[tip.postedBy].user_name} on ${tip.postedDate}`}</span>
                ) : (
                  <span>User not found</span>
                )}
              </div>
              {(sessionStorage.getItem("userRole") !== "Student") &&
                <button className="tips-delete-button" onClick={() => handleDeleteTips(tip.id)}>
                  <FaTrashAlt size={15} color="red" />
                </button>
              }
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tips;
