import React from 'react';
import './Articles.css';

function Articles() {
  return (
    <div className="articles" id="articles">
      <div className="articles-content">
        <h2>Articles</h2>
        <div className="articles-grid">
          <div className="article-card">
            <h3>Understanding Deep Learning Architectures</h3>
            <p>
              A comprehensive guide to modern deep learning architectures, 
              including CNNs, RNNs, and Transformers. Learn about their applications
              and implementation details.
            </p>
            <div className="article-tags">
              <span>Deep Learning</span>
              <span>Neural Networks</span>
              <span>AI</span>
            </div>
          </div>

          <div className="article-card">
            <h3>Data Preprocessing Best Practices</h3>
            <p>
              Essential techniques for preparing your data for machine learning models.
              Covers cleaning, normalization, feature engineering, and handling missing values.
            </p>
            <div className="article-tags">
              <span>Data Science</span>
              <span>ML</span>
              <span>Python</span>
            </div>
          </div>

          <div className="article-card">
            <h3>NLP Techniques for Beginners</h3>
            <p>
              Introduction to Natural Language Processing fundamentals.
              Learn about tokenization, embeddings, and basic text analysis.
            </p>
            <div className="article-tags">
              <span>NLP</span>
              <span>Python</span>
              <span>ML</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;