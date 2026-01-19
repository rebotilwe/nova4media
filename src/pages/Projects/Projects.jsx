import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PortfolioSection from "../../components/PortfolioSection/PortfolioSection";
import "./Projects.css";

function Projects() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Our Projects | Nova4Media</title>
        <meta
          name="description"
          content="Explore Nova4Media’s portfolio of photography, videography, drone productions and creative visual projects."
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="projects-hero">
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-tag">PORTFOLIO</span>
          <h1>Our Creative Projects</h1>
          <p>
            A showcase of our finest photography, videography, drone work and
            brand storytelling projects.
          </p>

          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Projects</span>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="projects-intro">
        <div className="container">
          <h2>Crafting Visual Experiences That Inspire</h2>
          <p>
            At Nova4Media, we help brands and individuals tell their stories
            through powerful visuals. From weddings and corporate branding to
            events and aerial productions — our work speaks for itself.
          </p>
        </div>
      </section>

      {/* ================= PORTFOLIO GRID ================= */}
      <PortfolioSection />
    </>
  );
}

export default Projects;
