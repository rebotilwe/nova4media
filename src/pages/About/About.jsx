// About.js
import React, { useEffect } from 'react';
import './About.css';

const features = [
  { icon: "📸", title: "Professional Equipment", desc: "State-of-the-art cameras and lighting equipment for flawless results in any condition" },
  { icon: "🎨", title: "Creative Editing", desc: "Expert post-processing with attention to detail to enhance natural beauty" },
  { icon: "👥", title: "Expert Team", desc: "Skilled photographers specializing in different genres for diverse needs" },
];

const stats = [
  { number: 500, label: "Projects Completed" },
  { number: 250, label: "Happy Clients" },
  { number: 50, label: "Awards Won" },
];

const About = () => {

  // Animate stats when scrolled into view
  useEffect(() => {
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          counters.forEach(counter => {
            let target = +counter.dataset.count;
            let count = 0;
            const step = target / 100;
            const interval = setInterval(() => {
              count += step;
              counter.textContent = Math.floor(count);
              if(count >= target) clearInterval(interval);
            }, 20);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });
    observer.observe(document.querySelector('.stats-counter'));
  }, []);

  // Animate elements on scroll
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header fade-up">
          <span className="section-label">About Us</span>
          <h2 className="section-title">Creating Timeless Visual Stories</h2>
          <p className="section-subtitle">Professional photography studio with over a decade of excellence in capturing life's most precious moments</p>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Left Column - Images */}
          <div className="about-images fade-up">
            <div className="main-image">
              <img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&fit=crop&q=80" alt="Photography Studio" className="about-img" />
              <div className="image-badge">
                <span className="badge-year">15+</span>
                <span className="badge-text">Years Experience</span>
              </div>
            </div>

            <div className="image-grid">
              <div className="grid-item" style={{ top: '-20px', left: '-10px' }}>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80" alt="Portrait Photography" />
              </div>
              <div className="grid-item" style={{ top: '10px', left: '20px' }}>
                <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&fit=crop&q=80" alt="Wedding Photography" />
              </div>
              <div className="grid-item" style={{ top: '-10px', left: '-15px' }}>
                <img src="https://images.unsplash.com/photo-1492684223066-dd23140edf6d?w=400&fit=crop&q=80" alt="Event Photography" />
              </div>
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="about-text">
            <div className="about-intro fade-up">
              <h3>Our Photography Philosophy</h3>
              <p>
                At Photia, we believe that every moment tells a story worth preserving.
                Our approach combines artistic vision with technical excellence to create 
                images that are not just photographs, but cherished memories frozen in time.
              </p>
              <p>
                Founded in 2010, we've grown from a small studio to a team of dedicated 
                professionals who share a passion for capturing authentic emotions and 
                beautiful compositions.
              </p>
            </div>

            {/* Features */}
            <div className="about-features">
              {features.map((f, i) => (
                <div key={i} className="feature-item fade-up">
                  <div className="feature-icon-wrapper">
                    <i className="feature-icon">{f.icon}</i>
                  </div>
                  <div className="feature-content">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="stats-counter fade-up">
              {stats.map((s, i) => (
                <div key={i} className="stat-box">
                  <div className="stat-number" data-count={s.number}>0</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="about-cta fade-up">
              <a href="/contact" className="btn-primary">
                <span>Book Your Session</span>
                <i className="arrow-icon">→</i>
              </a>
              <a href="/gallery" className="btn-secondary">View Our Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
