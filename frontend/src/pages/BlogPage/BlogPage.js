import './BlogPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/kitty.jpg';

const articles = [
  {
    id: 1,
    title: 'Managing Anxiety in Daily Life',
    description: 'Practical tips to cope with anxiety and stay grounded in stressful situations.',
    image: img,
  },
  {
    id: 2,
    title: 'The Importance of Self-Care',
    description: 'Explore how self-care routines can improve mental well-being.',
    image: img,
  },
];

const BlogPage = () => {

const isBlogPage = window.location.pathname === "/blog";
const isCounsellor = true;


  return (
    <div className="blog-container">
      {isBlogPage && isCounsellor && (
          <div className="add-article">
          <Link to="/add-article" className="add-article-link">
            Add Article
          </Link>
          </div>
        )}
      <div className="blog-grid">
        {articles.map((article) => (
          <div className="blog-card" key={article.id}>
            <img src={article.image} alt={article.title} className="blog-image" />
            <h2 className="blog-header">{article.title}</h2>
            <p className="blog-description">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
