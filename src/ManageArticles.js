import React, { useState } from "react";
import "./css/ManageArticles.css";
import AdminHeader from "./AdminHeader";
import { articles as initialArticles } from "./loadData";

function ManageArticles() {
    const [articles, setArticles] = useState(initialArticles);
    
    if (!sessionStorage.getItem("userId")) {
        alert("Please login to continue");
        window.location.href = "/login";
        return
    }

    const handleDeleteClick = (id) => {
        const updatedArticles = articles.filter(article => article.id !== id);
        setArticles(updatedArticles);
    };

    return (
        <>
            <AdminHeader />
            <div className="manage-articles">
                <h2>Manage Articles</h2>
                <table className="articles-table">
                    <thead>
                        <tr>
                            <th>Article ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Posted By</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.map(article => (
                            <tr key={article.id}>
                                <td>{article.id}</td>
                                <td>{article.name}</td>
                                <td>{article.description}</td>
                                <td>{article.postedBy}</td>
                                <td>{article.date}</td>
                                <td >
                                    <button className="delete-button actions-cell" onClick={() => handleDeleteClick(article.id)}>Delete</button><br />
                                    <a href={article.link} className="view-link " target="_blank" rel="noopener noreferrer">View</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ManageArticles;
