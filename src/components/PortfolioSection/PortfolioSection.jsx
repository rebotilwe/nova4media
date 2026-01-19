import React, { useState, useEffect } from "react";
import "./PortfolioSection.css";

const projects = [
  {
    id: 1,
    title: "Luxury Wedding Highlights",
    category: "Weddings",
    year: "2024",
    image: "https://picsum.photos/id/1011/1200/800",
  },
  {
    id: 2,
    title: "Corporate Branding Shoot",
    category: "Corporate",
    year: "2024",
    image: "https://picsum.photos/id/1012/1200/800",
  },
  {
    id: 3,
    title: "Event Cinematic Coverage",
    category: "Events",
    year: "2025",
    image: "https://picsum.photos/id/1013/1200/800",
  },
  {
    id: 4,
    title: "Product Showcase Visuals",
    category: "Product",
    year: "2025",
    image: "https://picsum.photos/id/1014/1200/800",
  },
  {
    id: 5,
    title: "Drone Aerial Footage",
    category: "Drone",
    year: "2024",
    image: "https://picsum.photos/id/1015/1200/800",
  },
  {
    id: 6,
    title: "Lifestyle Portrait Stories",
    category: "Lifestyle",
    year: "2024",
    image: "https://picsum.photos/id/1016/1200/800",
  },
];

const categories = [
  "All",
  "Weddings",
  "Corporate",
  "Events",
  "Product",
  "Drone",
  "Lifestyle",
];

function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">PORTFOLIO</span>
          <h2>
            Our <span>Work</span>
          </h2>
          <p>
            Explore the quality visual content and storytelling we deliver
            across photography, videography, drone work, and more.
          </p>
        </div>

        {/* Category Filter */}
        <div className="portfolio-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-card"
              style={{ "--index": index }}
              onClick={() => setActiveProject(project)}
            >
              <img src={project.image} alt={project.title} />
              <div className="portfolio-overlay">
                <span className="category">{project.category}</span>
                <h3>{project.title}</h3>
                <span className="year">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeProject && (
        <div className="lightbox" onClick={() => setActiveProject(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setActiveProject(null)}
            >
              ✕
            </button>

            <img
              src={activeProject.image}
              alt={activeProject.title}
            />

            <div className="lightbox-info">
              <h3>{activeProject.title}</h3>
              <p>{activeProject.category} • {activeProject.year}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PortfolioSection;
