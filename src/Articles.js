import React, { useState } from "react";
import "./css/Articles.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { FaTrashAlt } from 'react-icons/fa';

function Articles() {
  const [showForm, setShowForm] = useState(false);
  const [articles, setArticles] = useState([
    { id: 1, name: "The Importance of Career Mentorship", postedBy: "John Doe", date: "10/02/2024", description: "Learn how mentorship can play a crucial role in career development and success.", link: "#" },
    { id: 2, name: "Top 5 Tips for Job Interviews", postedBy: "Jane Smith", date: "10/03/2024", description: "These five tips will help you nail your next job interview and land your dream job.", link: "#" },
    { id: 3, name: "Building an Effective Resume", postedBy: "Chris Lee", date: "10/01/2024", description: "Discover how to craft a professional resume that catches the eye of recruiters.", link: "#" },
    { id: 4, name: "The Importance of Career Mentorship", postedBy: "John Doe", date: "10/02/2024", description: "Learn how mentorship can play a crucial role in career development and success.", link: "#" },
    { id: 5, name: "Top 5 Tips for Job Interviews", postedBy: "Jane Smith", date: "10/03/2024", description: "These five tips will help you nail your next job interview and land your dream job.", link: "#" },
    { id: 6, name: "Building an Effective Resume", postedBy: "Chris Lee", date: "10/01/2024", description: "Discover how to craft a professional resume that catches the eye of recruiters.", link: "#" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleCreateArticle = (event) => {
    event.preventDefault();
    const newArticle = {
      id: articles.length + 1,
      name: event.target.name.value,
      postedBy: event.target.postedBy.value,
      description: event.target.description.value,
      link: event.target.link.value,
      date: new Date().toLocaleDateString(),
    };
    setArticles([...articles, newArticle]);
    setShowForm(false);
  };

  const handleDeleteArticle = (id) => {
    const updatedArticles = articles.filter((article) => article.id !== id);
    setArticles(updatedArticles);
  };

  const filteredArticles = articles.filter((article) =>
    article.name.toLowerCase().includes(searchTerm) ||
    article.description.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <Header />
      <div className="articles-articles-page">
        <h1>Articles</h1>
        <SearchBar onSearch={handleSearch} />
        <button className="articles-create-article-button" onClick={() => setShowForm(true)}>
          Create Article
        </button>
        {showForm && (
          <div className="articles-form-overlay">
            <div className="articles-form-popup">
              <form className="articles-article-form" onSubmit={handleCreateArticle}>
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
                  <textarea name="description" required></textarea>
                </label>
                <label>
                  Article Link:
                  <input type="url" name="link" required />
                </label>
                <div className="articles-button-container">
                  <button type="submit" className="articles-submit-button">Submit</button>
                  <button type="button" className="articles-close-button" onClick={() => setShowForm(false)}>Close</button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="articles-articles-list">
          {filteredArticles.map((article) => (
            <div className="articles-article-card" key={article.id}>
              <div className="articles-article-details-left">
                <h3>{article.name}</h3>
                <p className="articles-description">{article.description}</p>
              </div>
              <div className="articles-article-details-right">
                <p><strong>Posted By:</strong> {article.postedBy}</p>
                <p>{article.date}</p>
              </div>
              <div className="articles-read-more">
                <a href={article.link} target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
              <button className="articles-delete-button" onClick={() => handleDeleteArticle(article.id)}>
                <FaTrashAlt size={20} color="red" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Articles;
