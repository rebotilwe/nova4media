import React, { useState, useEffect } from "react";
import "./PortfolioSection.css";

// Helper → Convert youtube url to embed
const getYoutubeEmbedUrl = (url) => {
  const id = url.includes("youtu.be")
    ? url.split("youtu.be/")[1]
    : url.split("v=")[1];
  return `https://www.youtube.com/embed/${id}?autoplay=1`;
};

const projects = [
  { id: 1, title: "Luxury Wedding Highlights", category: "Weddings", year: "2024", image: "https://picsum.photos/id/1011/1200/800" },
  { id: 2, title: "Corporate Branding Shoot", category: "Corporate", year: "2024", image: "https://picsum.photos/id/1012/1200/800" },
  { id: 3, title: "Nova4Media Cinematic Showcase", category: "Video", year: "2025", type: "video", videoUrl: "https://youtu.be/tQDCKRifSNA", image: "https://img.youtube.com/vi/tQDCKRifSNA/hqdefault.jpg" },
  { id: 4, title: "Event Cinematic Coverage", category: "Events", year: "2025", image: "https://picsum.photos/id/1013/1200/800" },
  { id: 5, title: "Drone Aerial Footage", category: "Drone", year: "2024", image: "https://picsum.photos/id/1015/1200/800" },
  { id: 6, title: "Lifestyle Portrait Stories", category: "Lifestyle", year: "2024", image: "https://picsum.photos/id/1016/1200/800" },
  { id: 7, title: "Corporate Video Promo", category: "Video", year: "2025", type: "video", videoUrl: "https://youtu.be/naxfQ3S_6GU", image: "https://img.youtube.com/vi/naxfQ3S_6GU/hqdefault.jpg" },
  { id: 8, title: "Wedding Cinematic Film", category: "Video", year: "2024", type: "video", videoUrl: "https://youtu.be/0Yu7DWfdL4s", image: "https://img.youtube.com/vi/0Yu7DWfdL4s/hqdefault.jpg" },
  { id: 9, title: "Fashion Short Film", category: "Video", year: "2024", type: "video", videoUrl: "https://youtu.be/uXewtfzto0k", image: "https://img.youtube.com/vi/uXewtfzto0k/hqdefault.jpg" },
  { id: 10, title: "Event Promo Reel", category: "Video", year: "2024", type: "video", videoUrl: "https://youtu.be/HH9E33qXSrs", image: "https://img.youtube.com/vi/HH9E33qXSrs/hqdefault.jpg" },
  { id: 11, title: "Corporate Branding Video", category: "Video", year: "2025", type: "video", videoUrl: "https://youtu.be/XD4xOp0KBnA", image: "https://img.youtube.com/vi/XD4xOp0KBnA/hqdefault.jpg" },
  { id: 12, title: "Drone Cinematic Reel", category: "Video", year: "2025", type: "video", videoUrl: "https://youtu.be/TLTNQkZraFg", image: "https://img.youtube.com/vi/TLTNQkZraFg/hqdefault.jpg" }
];

const categories = ["All", "Weddings", "Corporate", "Events", "Drone", "Lifestyle", "Video"];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

  // Close modal on ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const closeModal = () => setActiveProject(null);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">PORTFOLIO</span>
          <h2>Our <span>Work</span></h2>
          <p>Explore the quality visual content and storytelling we deliver across photography and videography.</p>
        </div>

        <div className="portfolio-filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="portfolio-card" style={{ "--index": index }} onClick={() => setActiveProject(project)}>
              <img src={project.image} alt={project.title} />
              {project.type === "video" && <div className="video-badge">▶</div>}
              <div className="portfolio-overlay">
                <span className="category">{project.category}</span>
                <h3>{project.title}</h3>
                <span className="year">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeProject && (
        <div className="lightbox" onClick={closeModal}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeModal}>← Back</button>
            {activeProject.type === "video" ? (
              <iframe
                className="lightbox-video"
                src={getYoutubeEmbedUrl(activeProject.videoUrl)}
                title={activeProject.title}
                loading="lazy"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img src={activeProject.image} alt={activeProject.title} />
            )}
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
