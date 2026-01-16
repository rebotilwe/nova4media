// components/Sections/PortfolioSection.jsx
import React, { useState, useEffect } from 'react';
import './PortfolioSection.css';

const projects = [
  {
    id: 1,
    title: "Wedding Photography",
    category: "Events",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: 2,
    title: "Product Campaign",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w-800&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1556228578-9c360e0b8f3e?w=800&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: 3,
    title: "Urban Architecture",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1487956382158-bb926046304a?w=800&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=800&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: 4,
    title: "Fashion Editorial",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: 5,
    title: "Corporate Branding",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: 6,
    title: "Nature Wildlife",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&auto=format&fit=crop",
    year: "2024"
  }
];

const categories = ["All", "Events", "Commercial", "Architecture", "Fashion", "Nature"];

const PortfolioSection = React.forwardRef((props, ref) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="portfolio-section" ref={ref}>
      {/* Animated Background */}
      <div className="portfolio-bg"></div>
      
      {/* Magnetic Cursor */}
      <div 
        className="portfolio-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          opacity: hoveredProject ? 1 : 0
        }}
      >
        VIEW
      </div>

      <div className="container">
        {/* Section Header with Animation */}
        <div className="section-header">
          <div className="section-label">
            <span className="label-line"></span>
            <span className="label-text">OUR WORK</span>
          </div>
          <h2 className="section-title">
            <span className="title-word">Featured</span>
            <span className="title-word accent">Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore our creative journey through carefully curated projects 
            that showcase our passion for visual storytelling.
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
              <span className="btn-underline"></span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container with Hover Effect */}
              <div className="image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <img 
                  src={project.hoverImage} 
                  alt={project.title}
                  className="project-hover-image"
                />
                <div className="image-overlay">
                  <div className="year-badge">{project.year}</div>
                  <div className="view-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M18 13V19C18 20.1046 17.1046 21 16 21H5C3.89543 21 3 20.1046 3 19V8C3 6.89543 3.89543 6 5 6H11" stroke="currentColor" strokeWidth="2"/>
                      <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="project-info">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-link">
                  <span>View Project</span>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="card-border">
                <div className="border-top"></div>
                <div className="border-right"></div>
                <div className="border-bottom"></div>
                <div className="border-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="load-more">
          <button className="load-more-btn">
            <span>LOAD MORE</span>
            <div className="btn-arrows">
              <div className="arrow">→</div>
              <div className="arrow">→</div>
            </div>
            <div className="btn-glow"></div>
          </button>
        </div>
      </div>
    </section>
  );
});

export default PortfolioSection;