// components/RecentProjects/RecentProjects.jsx
import React, { useState } from "react";
import "./RecentProjects.css";

const projects = [
  {
    id: 1,
    type: "image",
    title: "Luxury Wedding Photography",
    category: "Events",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&auto=format&fit=crop",
  },
  {
    id: 101,
    type: "video",
    title: "Nova Media Highlight",
    category: "Videos",
    year: "2025",
    videoUrl: "https://youtu.be/tQDCKRifSNA",
  },
  {
    id: 2,
    type: "image",
    title: "Fashion Editorial Shoot",
    category: "Fashion",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&auto=format&fit=crop",
  },
];

const getYouTubeId = (url) => {
  if (!url) return "";
  return url.split("youtu.be/")[1] || url.split("v=")[1];
};

function RecentProjects() {
  const [activeVideo, setActiveVideo] = useState(null);

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
            A preview of our latest photography and videography projects.
          </p>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((project) => {
            const isVideo = project.type === "video";
            const videoId = isVideo ? getYouTubeId(project.videoUrl) : null;
            const thumbnail = isVideo
              ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
              : project.image;

            return (
              <div
                key={project.id}
                className={`project-card ${isVideo ? "video-card" : ""}`}
                onClick={() => isVideo && setActiveVideo(videoId)}
              >
                <div className="image-wrapper">
                  <img src={thumbnail} alt={project.title} />

                  {isVideo && <div className="play-overlay">▶</div>}
                </div>

                <div className="project-overlay">
                  <span className="category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <span className="year">{project.year}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="projects-cta">
          <a href="/projects" className="primary-btn">
            View Full Portfolio →
          </a>
        </div>
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setActiveVideo(null)}
            >
              ✕
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="Video Player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default RecentProjects;
