import React from 'react';
import './BlogPreview.css';
import { FaCalendar, FaClock, FaUser, FaArrowRight } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Visual Storytelling in Photography',
    excerpt: 'Learn how to create compelling narratives through your lens and connect with your audience emotionally through carefully crafted imagery.',
    category: 'Photography Tips',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&auto=format&fit=crop',
    author: 'Jane Doe',
    authorRole: 'Lead Photographer',
    authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d7?w=150&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Mastering Light in Portrait Photography',
    excerpt: 'Discover advanced lighting techniques that can transform your portrait photography and create stunning, professional results.',
    category: 'Tutorial',
    date: 'Dec 10, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&auto=format&fit=crop',
    author: 'John Smith',
    authorRole: 'Lighting Expert',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'The Future of AI in Photo Editing',
    excerpt: 'Exploring how artificial intelligence is revolutionizing the photo editing workflow and what it means for photographers.',
    category: 'Technology',
    date: 'Dec 5, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&auto=format&fit=crop',
    author: 'Alex Chen',
    authorRole: 'Tech Editor',
    authorImage: 'https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=150&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Building Your Photography Brand',
    excerpt: 'Essential strategies for establishing and growing your personal brand as a photographer in the digital age.',
    category: 'Business',
    date: 'Nov 28, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
    author: 'Sarah Johnson',
    authorRole: 'Brand Strategist',
    authorImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&auto=format&fit=crop'
  }
];

function BlogPreview() {
  return (
    <section className="blog-preview">
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            <span className="label-text">INSIGHTS & UPDATES</span>
          </div>
          <h2 className="section-title">
            Latest <span className="accent">Blog Posts</span>
          </h2>
          <p className="section-subtitle">
            Stay updated with industry trends, expert tips, and creative insights from our team of professionals.
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
                  <div className="meta-item">
                    <FaCalendar />
                    <span>{post.date}</span>
                  </div>
                  <div className="meta-dot"></div>
                  <div className="meta-item">
                    <FaClock />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="card-title">{post.title}</h3>
                
                <p className="card-excerpt">{post.excerpt}</p>
                
                <div className="author-section">
                  <div className="author-avatar">
                    <img src={post.authorImage} alt={post.author} />
                  </div>
                  <div className="author-info">
                    <h4>{post.author}</h4>
                    <p>{post.authorRole}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* <div className="view-all-blog">
          <a href="/blog" className="btn-modern">
            <span>Explore All Articles</span>
            <div className="arrow-group">
              <FaArrowRight />
            </div>
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default BlogPreview;