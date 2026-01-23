import React, { useRef, useEffect } from 'react';
import { Award, Users, Camera, Video, Globe, ChevronRight, Target, Heart } from 'lucide-react';
import './About.css';
import { useNavigate } from "react-router-dom";

const About = () => {
  const sectionRefs = useRef([]);
  const navigate = useNavigate();

  // Scroll Reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.3 } // slightly higher for better visibility
    );

    sectionRefs.current.forEach(ref => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const addToRefs = el => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  // Stats
  const stats = [
    { number: '10+', label: 'Years Experience', icon: <Award /> },
    { number: '500+', label: 'Projects Completed', icon: <Camera /> },
    { number: '200+', label: 'Happy Clients', icon: <Users /> },
    { number: '50+', label: 'Awards Won', icon: <Award /> },
  ];

  // Services
  const services = [
    { icon: <Camera />, title: 'Professional Photography', desc: 'High-quality commercial, product, and event photography.' },
    { icon: <Video />, title: 'Video Production', desc: 'Corporate videos, commercials, and promotional content.' },
    { icon: <Globe />, title: 'Digital Marketing', desc: 'Social media management and digital campaigns.' },
    { icon: <Target />, title: 'Brand Strategy', desc: 'Complete brand development and positioning.' },
  ];

  // Timeline
  const timeline = [
    { year: '2013', title: 'Founded in Joburg', desc: 'Started as a photography studio with 2 team members' },
    { year: '2015', title: 'Expanded to Video Production', desc: 'Added video services and moved to larger studio' },
    { year: '2018', title: 'Digital Agency Launch', desc: 'Became full-service media agency with 10+ team members' },
    { year: '2020', title: 'National Recognition', desc: 'Won multiple awards and expanded to Cape Town & Durban' },
    { year: '2023', title: 'International Projects', desc: 'Working with clients across Africa and Europe' },
  ];

  // Values
  const values = [
    { icon: <Heart />, title: 'Passion', desc: 'We love what we do and it shows in every project.' },
    { icon: <Target />, title: 'Excellence', desc: 'Never settling for anything less than exceptional.' },
    { icon: <Users />, title: 'Collaboration', desc: 'Your vision combined with our expertise creates magic.' },
    { icon: <Award />, title: 'Innovation', desc: 'Always exploring new techniques and technologies.' },
  ];

  // Clients
  const clients = [
    'MTN', 'Nedbank', 'Vodacom', 'Woolworths', 'Discovery', 'Sanlam', 'Pick n Pay', 'Standard Bank'
  ];

  return (
    <div className="about-us-page">

      {/* ================= HERO SECTION ================= */}
      <section className="about-hero">
        <div className="hero-image-bg">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80" 
            alt="Nova4Media Team" 
          />
          <div className="image-overlay"></div>
        </div>

        <div className="hero-floating-shapes">
          <span className="shape shape1"></span>
          <span className="shape shape2"></span>
          <span className="shape shape3"></span>
        </div>

        <div className="container">
          <div className="hero-content">
            <h1 className="reveal" ref={addToRefs}>
              Crafting Visual Stories <br />
              <span className="brand-accent">That Move People</span>
            </h1>

            <p className="reveal" ref={addToRefs}>
              South Africa's premier photography, videography, and digital media agency.
              We transform ideas into compelling visual stories that connect with audiences
              and drive business growth.
            </p>

            <a
              href="https://www.youtube.com/watch?v=0Yu7DWfdL4s"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button reveal"
              ref={addToRefs}
            >
              <span>Watch Our Story on YouTube</span>
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= OUR MISSION ================= */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content reveal" ref={addToRefs}>
              <h2>Our Mission</h2>
              <p className="mission-statement">
                To empower businesses with compelling visual content that tells authentic stories,
                builds emotional connections, and drives measurable results in today's digital landscape.
              </p>
              <div className="mission-highlights">
                <div className="highlight">
                  <Target size={24} />
                  <span>Purpose-Driven Content</span>
                </div>
                <div className="highlight">
                  <Heart size={24} />
                  <span>Emotional Storytelling</span>
                </div>
                <div className="highlight">
                  <Award size={24} />
                  <span>Award-Winning Quality</span>
                </div>
              </div>
            </div>
            
            <div className="mission-image reveal" ref={addToRefs}>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
                alt="Our Mission"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header reveal" ref={addToRefs}>
            <h2>Our <span className="brand-accent">Journey</span></h2>
            <p> decade of growth, innovation, and excellence</p>
          </div>

          <div className="timeline">
            {timeline.map((item, idx) => (
              <div 
                key={idx} 
                className={`timeline-item reveal ${idx % 2 === 0 ? 'left' : 'right'}`}
                ref={addToRefs}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="stat-card reveal"
              ref={addToRefs}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CLIENTS ================= */}
      <section className="clients-section">
        <div className="container">
          <div className="section-header reveal" ref={addToRefs}>
            <h2>Trusted By <span className="brand-accent">Leading Brands</span></h2>
            <p>We're proud to partner with industry leaders across South Africa</p>
          </div>

          <div className="clients-grid reveal" ref={addToRefs}>
            {clients.map((client, idx) => (
              <div key={idx} className="client-logo">
                <span>{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services-section">
        <div className="container">
          <div className="section-header reveal" ref={addToRefs}>
            <h2>What We <span className="brand-accent">Do</span></h2>
            <p>Comprehensive media solutions for modern businesses</p>
          </div>

          <div className="services-grid">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="service-card reveal"
                ref={addToRefs}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="values-section">
        <div className="container">
          <div className="section-header reveal" ref={addToRefs}>
            <h2>Our <span className="brand-accent">Values</span></h2>
            <p>The principles that guide everything we do</p>
          </div>

          <div className="values-grid">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="value-card reveal"
                ref={addToRefs}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="about-cta">
        <div className="cta-floating-shapes">
          <span className="shape shape1"></span>
          <span className="shape shape2"></span>
          <span className="shape shape3"></span>
        </div>

        <div className="container">
          <div className="cta-content reveal" ref={addToRefs}>
            <h2>Ready to Tell Your Story?</h2>
            <p>Let's collaborate to create media that makes an impact and drives results</p>
            <div className="cta-buttons">
              <button 
                className="primary-btn"
                onClick={() => navigate("/contactPage")}
              >
                Start a Project
              </button>

              <button 
                className="secondary-btn"
                onClick={() => navigate("/projects")}
              >
                View Portfolio
              </button>
              
              <a 
                href="https://www.youtube.com/watch?v=0Yu7DWfdL4s"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-btn"
              >
                Watch Our Story ↗
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
