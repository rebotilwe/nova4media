// components/RecentProjects/RecentProjects.jsx
import React, { useState } from "react";
import "./RecentProjects.css";

const projects = [
  {
    id: 1,
    title: "Luxury Wedding Photography",
    category: "Events",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Fashion Editorial Shoot",
    category: "Fashion",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Commercial Brand Campaign",
    category: "Commercial",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Creative Portrait Session",
    category: "Portrait",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&auto=format&fit=crop",
  },
];

const categories = ["All", "Events", "Fashion", "Commercial", "Portrait"];

function RecentProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="recent-projects">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">FEATURED WORK</span>
          <h2>
            Recent <span>Projects</span>
          </h2>
          <p>
            A curated selection of our latest photography and visual storytelling
            projects crafted with passion and precision.
          </p>
        </div>

        {/* Filters */}
        <div className="filter-row">
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

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((project) => (
            <div key={project.id} className="project-card">
              <div className="image-wrapper">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-overlay">
                <span className="category">{project.category}</span>
                <h3>{project.title}</h3>
                <span className="year">{project.year}</span>

                <button className="view-btn">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="projects-cta">
          <a href="/projects" className="primary-btn">
            View Full Portfolio →
          </a>
        </div>
      </div>
    </section>
  );
}

export default RecentProjects;
