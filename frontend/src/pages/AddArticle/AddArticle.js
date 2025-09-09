import React, { useState } from 'react';
import './AddArticle.css';

const AddArticle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = { title, description, image };
    console.log('New Article Submitted:', newArticle);
    // Add submission logic here (API call or local state update)
    setTitle('');
    setDescription('');
    setImage('');
  };

  return (
    <div className="add-article-container">
      <h1>Add New Article</h1>
      <form className="article-form" onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Image URL
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </label>
        <button type="submit">Publish Article</button>
      </form>
    </div>
  );
};

export default AddArticle;
