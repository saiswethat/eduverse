import React, { useState } from "react";
import "./css/Articles.css";
import Header from "./Header";
import SearchBar from "./SearchBar";  // Import the SearchBar component

function Articles() {
  const [showForm, setShowForm] = useState(false);
  const [articles, setArticles] = useState([
    {
      id: 1,
      name: "The Importance of Career Mentorship",
      postedBy: "John Doe",
      date: "10/02/2024",
      description: "Learn how mentorship can play a crucial role in career development and success.",
      link: "#",
    },
    {
      id: 2,
      name: "Top 5 Tips for Job Interviews",
      postedBy: "Jane Smith",
      date: "10/03/2024",
      description: "These five tips will help you nail your next job interview and land your dream job.",
      link: "#",
    },
    {
      id: 3,
      name: "Building an Effective Resume",
      postedBy: "Chris Lee",
      date: "10/01/2024",
      description: "Discover how to craft a professional resume that catches the eye of recruiters.",
      link: "#",
    },
    {
      id: 4,
      name: "The Importance of Career Mentorship",
      postedBy: "John Doe",
      date: "10/02/2024",
      description: "Learn how mentorship can play a crucial role in career development and success.",
      link: "#",
    },
    {
      id: 5,
      name: "Top 5 Tips for Job Interviews",
      postedBy: "Jane Smith",
      date: "10/03/2024",
      description: "These five tips will help you nail your next job interview and land your dream job.",
      link: "#",
    },
    {
      id: 6,
      name: "Building an Effective Resume",
      postedBy: "Chris Lee",
      date: "10/01/2024",
      description: "Discover how to craft a professional resume that catches the eye of recruiters.",
      link: "#",
    },
  ]);


  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleCreateArticle = (event) => {
    event.preventDefault();
    const newArticle = {
      name: event.target.name.value,
      postedBy: event.target.postedBy.value,
      description: event.target.description.value,
      link: event.target.link.value,
      date: new Date().toLocaleDateString(),
    };
    setArticles([...articles, newArticle]);
    setShowForm(false); // Close the form after submission
  };

  const filteredArticles = articles.filter((article) =>
    article.name.toLowerCase().includes(searchTerm) ||
    article.description.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <Header />
      <div className="articles-page">
        <h1>Articles</h1>

        {/* Add SearchBar */}
        <SearchBar onSearch={handleSearch} />

        <button className="create-article-button" onClick={() => setShowForm(true)}>
          Create Article
        </button>

        {/* Form modal */}
        {showForm && (
          <div className="form-overlay">
            <div className="form-popup">
              <form className="article-form" onSubmit={handleCreateArticle}>
                <h2>Create New Article</h2>
                <label>
                  Article Name:
                  <input type="text" name="name" required />
                </label>
                <label>
                  Posted By:
                  <input type="text" name="postedBy" required />
                </label>
                <label>
                  Description:
                  <textarea name="description" required ></textarea>
                </label>
                <label>
                  Article Link:
                  <input type="url" name="link" required />
                </label>
                <div className="button-container">
    <button type="submit" className="submit-button">Submit</button>
    <button type="button" className="close-button" onClick={() => setShowForm(false)}>Close</button>
  </div>
              </form>
            </div>
          </div>
        )}

        <div className="articles-list">
          {filteredArticles.map((article, index) => (
            <div className="article-card" key={index}>
              <div className="article-details-left">
                <h3>{article.name}</h3>
                <p className="description"> {article.description}</p>
              </div>
              <div className="article-details-right">
                <p><strong>Posted By:</strong> {article.postedBy}</p>
                <p >{article.date}</p>
              </div>
              <div className="read-more">
                <a href={article.link} target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Articles;
