import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <h2 className="blog-title">Del Nostre Blog</h2>
        <div className="blog-posts">
          <div className="blog-post">
            <img src="https://via.placeholder.com/300" alt="Blog Post 1" />
            <h3>Títol de la Publicació 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed, magna.</p>
          </div>
          <div className="blog-post">
            <img src="https://via.placeholder.com/300" alt="Blog Post 2" />
            <h3>Títol de la Publicació 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed, magna.</p>
          </div>
          <div className="blog-post">
            <img src="https://via.placeholder.com/300" alt="Blog Post 3" />
            <h3>Títol de la Publicació 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed, magna.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
