// RecentProjects.js
import React from 'react';
import './RecentProjects.css';

const projects = [
  { image: "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d6?w=600&fit=crop&q=80", title: "Wedding Bliss", category: "Wedding Photography" },
  { image: "https://images.unsplash.com/photo-1502764613149-7f1d229e2302?w=600&fit=crop&q=80", title: "Urban Life", category: "Street Photography" },
  { image: "https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=600&fit=crop&q=80", title: "Portrait Glow", category: "Portrait Photography" },
  { image: "https://images.unsplash.com/photo-1514516876040-55b3d882b580?w=600&fit=crop&q=80", title: "Nature Wonders", category: "Landscape Photography" },
  { image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&fit=crop&q=80", title: "Corporate Moments", category: "Corporate Photography" },
  { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&fit=crop&q=80", title: "Lifestyle Magic", category: "Lifestyle Photography" },
];

const RecentProjects = () => {
  return (
    <section id="recent-projects" className="recent-projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Recent Projects</span>
          <h2 className="section-title">Showcasing Our Latest Works</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <h4>{project.title}</h4>
                <span>{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
