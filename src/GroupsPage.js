import React, { useState } from "react";
import "./css/GroupsPage.css"; // Assuming you have a CSS file for styling
import GroupChat from "./GroupChat"; // The chat component
import Header from "./Header";

const groupsData = [
  { 
    id: 1, 
    name: "AI & Machine Learning", 
    description: "Discuss AI trends, ML techniques.", 
    academicInterest: "Artificial Intelligence" 
  },
  { 
    id: 2, 
    name: "Career Development", 
    description: "Grow your career with advice and resources.", 
    academicInterest: "Career Counseling" 
  },
  { 
    id: 3, 
    name: "Academic Research", 
    description: "Collaborate on academic papers and projects.", 
    academicInterest: "Research Methodology" 
  },
  { 
    id: 4, 
    name: "Web Development", 
    description: "Talk about web development tips and tools.", 
    academicInterest: "Computer Science" 
  },
  // Add more groups as necessary
];

function GroupsPage() {
  const [joinedGroups, setJoinedGroups] = useState([groupsData[0]]); // Default: Joined AI & ML
  const [availableGroups, setAvailableGroups] = useState(groupsData.filter(group => group.id !== 1));
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };

  const handleJoinGroup = (groupToJoin) => {
    // Move the group to the "joined" section
    setJoinedGroups([...joinedGroups, groupToJoin]);
    setAvailableGroups(availableGroups.filter(group => group.id !== groupToJoin.id));
  };

  // New handleBack function to reset selectedGroup
  const handleBack = () => {
    setSelectedGroup(null);
  };

  const handleLeaveGroup = (groupToLeave) => {
    setJoinedGroups(joinedGroups.filter(group => group.id !== groupToLeave.id));
    setAvailableGroups([...availableGroups, groupToLeave]); 
    setSelectedGroup(null); 
  };

  return (
    <>
    <Header/>
    <div className="groups-page">
      <h1>Interest-Based Groups</h1>

      {selectedGroup ? (
        <GroupChat 
          group={selectedGroup} 
          handleLeaveGroup={handleLeaveGroup} // Pass the handleLeaveGroup function
          handleBack={handleBack} // Pass the handleBack function
        />
      ) : (
        <div>
          <div className="groups-section">
            <h2 className="text-center">Your Groups</h2>
            <div className="groups-list">
              {joinedGroups.length === 0 ? (
                <p className="text-center">You haven't joined any groups yet.</p>
              ) : (
                joinedGroups.map((group) => (
                  <div key={group.id} className="group-tile" onClick={() => handleGroupClick(group)}>
                    <h2>{group.name}</h2>
                    <p>{group.description}</p>
                    <p><strong>Academic Interest:</strong> {group.academicInterest}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="groups-section">
            <h2 className="text-center">You might like these Groups</h2>
            <div className="groups-list">
              {availableGroups.length === 0 ? (
                <p>No more groups available to join.</p>
              ) : (
                availableGroups.map((group) => (
                  <div key={group.id} className="group-tile">
                    <h2>{group.name}</h2>
                    <p>{group.description}</p>
                    <p><strong>Academic Interest:</strong> {group.academicInterest}</p>
                    <button onClick={() => handleJoinGroup(group)} className="join-button">
                      Join Group
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default GroupsPage;
