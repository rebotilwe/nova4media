// components/BlogPreview/BlogPreview.jsx
import React from 'react';
import './BlogPreview.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Visual Storytelling in Photography',
    excerpt: 'Learn how to create compelling narratives through your lens and connect with your audience emotionally.',
    category: 'Photography Tips',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&auto=format&fit=crop',
    author: 'Jane Doe'
  },
  // Add more posts...
];

function BlogPreview() {
  return (
    <div className="blog-preview">
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            <span className="label-line"></span>
            <span className="label-text">INSIGHTS & UPDATES</span>
          </div>
          <h2>Latest <span className="accent">Blog Posts</span></h2>
          <p className="section-subtitle">
            Stay updated with industry trends, tips, and creative insights
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="card-image">
                <img src={post.image} alt={post.title} />
                <div className="card-category">{post.category}</div>
                <div className="card-hover-overlay">
                  <div className="read-more">
                    <span>Read Article</span>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="card-content">
                <div className="card-meta">
                  <span className="date">{post.date}</span>
                  <span className="dot">•</span>
                  <span className="read-time">{post.readTime}</span>
                </div>
                
                <h3 className="card-title">{post.title}</h3>
                
                <p className="card-excerpt">{post.excerpt}</p>
                
                <div className="card-footer">
                  <span className="author">By {post.author}</span>
                  <div className="arrow-icon">→</div>
                </div>
              </div>
              
              <div className="card-border"></div>
            </article>
          ))}
        </div>
        
        <div className="view-all-blog">
          <a href="/blog" className="btn-outline">
            <span>View All Articles</span>
            <div className="arrow-group">
              <span>→</span>
              <span>→</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogPreview;