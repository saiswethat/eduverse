import React, { useState, useEffect } from "react";
import "./css/Tips.css"; // Updated CSS file name
import Header from "./Header";
import SearchBar from "./SearchBar"; // SearchBar component

function Tips() {
  const users = {
    1: { name: 'Alice' },
    2: { name: 'Bob' },
    3: { name: 'Charlie' },
    4: { name: 'David' },
    5: { name: 'Eve' },
    6: { name: 'Frank' },
    7: { name: 'Grace' },
    8: { name: 'Hank' },
    9: { name: 'Ivy' },
    10: { name: 'Jack' },
    11: { name: 'Karen' },
    12: { name: 'Leo' },
    13: { name: 'Mia' },
    14: { name: 'Nina' },
    15: { name: 'Oliver' },
    16: { name: 'Paul' },
    17: { name: 'Quinn' },
    18: { name: 'Rachel' },
    19: { name: 'Steve' },
    20: { name: 'Tina' },
    21: { name: 'Uma' },
    22: { name: 'Victor' },
    23: { name: 'Wendy' },
    24: { name: 'Xander' },
    25: { name: 'Yara' },
    26: { name: 'Zack' },
    27: { name: 'Aaron' },
    28: { name: 'Bella' },
    29: { name: 'Chris' },
    30: { name: 'Diana' },
    31: { name: 'Eli' },
    32: { name: 'Fiona' },
    33: { name: 'George' },
    34: { name: 'Hazel' },
    35: { name: 'Isaac' },
    36: { name: 'Jasmine' },
    37: { name: 'Kyle' },
    38: { name: 'Lily' },
    39: { name: 'Mason' },
    40: { name: 'Nora' },
  };

  const [tips, setTips] = useState([
    { id: 1, content: "Always tailor your resume to the job you're applying for.", postedBy: 1 },
    { id: 2, content: "Keep your resume concise and avoid unnecessary details.", postedBy: 2 },
    { id: 3, content: "Use strong action verbs to describe your achievements.", postedBy: 3 },
    { id: 4, content: "Quantify your accomplishments with numbers.", postedBy: 1 },
    { id: 5, content: "Research the company culture before an interview to better align your responses.", postedBy: 2 },
    { id: 6, content: "Follow up with a thank-you email after the interview to show appreciation.", postedBy: 3 },
    { id: 7, content: "Maintain a professional online presence, especially on LinkedIn.", postedBy: 4 },
    { id: 8, content: "Practice common interview questions to reduce anxiety and boost confidence.", postedBy: 2 },
    { id: 9, content: "Use a cover letter to highlight specific experiences that match the job.", postedBy: 5 },
    { id: 10, content: "Be ready to explain employment gaps or career changes with a positive narrative.", postedBy: 6 },
    { id: 11, content: "Break down large assignments into smaller, manageable tasks.", postedBy: 7 },
    { id: 12, content: "Active note-taking during lectures enhances retention.", postedBy: 8 },
    { id: 13, content: "Join study groups to reinforce learning through discussions.", postedBy: 9 },
    { id: 14, content: "Set aside regular study time and avoid cramming before exams.", postedBy: 10 },
    { id: 15, content: "Take frequent short breaks during study sessions to stay fresh.", postedBy: 11 },
    { id: 16, content: "Use mnemonic devices to remember complex information.", postedBy: 12 },
    { id: 17, content: "Find a quiet, organized workspace for studying to minimize distractions.", postedBy: 13 },
    { id: 18, content: "Review material regularly instead of waiting until the last minute.", postedBy: 14 },
    { id: 19, content: "Stay curious and ask questions to deepen understanding.", postedBy: 15 },
    { id: 20, content: "Get enough sleep before exams to improve focus and performance.", postedBy: 16 },
    { id: 21, content: "Attend networking events and follow up with the contacts you meet.", postedBy: 17 },
    { id: 22, content: "Always bring business cards to professional events.", postedBy: 18 },
    { id: 23, content: "Use LinkedIn to connect with professionals in your field.", postedBy: 19 },
    { id: 24, content: "Offer help to others in your network before asking for favors.", postedBy: 20 },
    { id: 25, content: "Participate in conferences or seminars related to your field.", postedBy: 21 },
    { id: 26, content: "Prepare a short, memorable elevator pitch to introduce yourself.", postedBy: 22 },
    { id: 27, content: "Be an active listener during conversations to build meaningful connections.", postedBy: 23 },
    { id: 28, content: "Follow industry trends to stay current in your networking conversations.", postedBy: 24 },
    { id: 29, content: "Use social media platforms to showcase your expertise and projects.", postedBy: 25 },
    { id: 30, content: "Create a to-do list each day to stay organized.", postedBy: 26 },
    { id: 31, content: "Use a planner or digital app to track deadlines and assignments.", postedBy: 27 },
    { id: 32, content: "Prioritize your tasks by importance and due date.", postedBy: 28 },
    { id: 33, content: "Study in short bursts using the Pomodoro technique (25 minutes work, 5 minutes break).", postedBy: 29 },
    { id: 34, content: "Eliminate multitasking to focus fully on one task at a time.", postedBy: 30 },
    { id: 35, content: "Use flashcards to quickly review and test your knowledge.", postedBy: 31 },
    { id: 36, content: "Track your progress over time to see improvements and areas for growth.", postedBy: 32 },
    { id: 37, content: "Reward yourself for completing important tasks to stay motivated.", postedBy: 33 },
    { id: 38, content: "Don't hesitate to ask for help or clarification from professors or peers.", postedBy: 34 },
  ]);

  const [randomTip, setRandomTip] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setRandomTip(tips[randomIndex]);
  }, [tips]);

  const filteredTips = tips.filter((tip) =>
    tip.content.toLowerCase().includes(searchTerm) ||
    users[tip.postedBy].name.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <Header />
      <div className="tips-tips-page">
        <h1>Career Tips</h1>

        {/* Display Random Tip of the Day */}
        {randomTip && (
          <div className="tips-random-tip">
            <h2>Tip of the Day</h2>
            <div className="tips-tip-card">
              <p>{randomTip.content}</p>
              <div className="tips-posted-by">
                {users[randomTip.postedBy] ? (
                  <span>{`Posted by: ${users[randomTip.postedBy].name}`}</span>
                ) : (
                  <span>User not found</span>
                )}
              </div>
            </div>
          </div>
        )}

        <SearchBar onSearch={handleSearch} />

        <div className="tips-tips-carousel">
          <h2>All Tips</h2>
          <div className="tips-carousel-container">
            {filteredTips.map((tip) => (
              <div key={tip.id} className="tips-tip-card">
                <div className="tips-tip-content">
                  <p>{tip.content}</p>
                </div>
                <div className="tips-tip-poster">
                  {users[tip.postedBy] ? (
                    <span>{`Posted by: ${users[tip.postedBy].name}`}</span>
                  ) : (
                    <span>User not found</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tips;