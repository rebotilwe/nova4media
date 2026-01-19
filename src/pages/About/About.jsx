import React, { useRef, useEffect } from 'react';
import { Play, Award, Users, Camera, Video, Globe } from 'lucide-react';
import './About.css'; // Use the updated CSS file I provided earlier

const About = () => {
  const sectionRefs = useRef([]);

  // Intersection Observer for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

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
    { icon: <Play />, title: 'Live Streaming', desc: 'Professional live streaming for events and conferences.' },
  ];

  // Team Members
  const teamMembers = [
    { name: 'John Smith', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop', bio: '10+ years in visual storytelling and brand development.' },
    { name: 'Sarah Johnson', role: 'Lead Photographer', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop', bio: 'Specializes in commercial and product photography.' },
    { name: 'Michael Chen', role: 'Video Producer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop', bio: 'Award-winning corporate video production expert.' },
    { name: 'Emma Davis', role: 'Digital Strategist', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop', bio: 'Social media and digital marketing specialist.' },
  ];

  // Values
  const values = [
    { title: 'Creativity', desc: 'Pushing boundaries with innovative visual solutions.' },
    { title: 'Quality', desc: 'Delivering exceptional work that exceeds expectations.' },
    { title: 'Reliability', desc: 'Consistent, professional service you can depend on.' },
    { title: 'Collaboration', desc: 'Working closely with clients to achieve shared goals.' },
  ];

  return (
    <div className="about-us-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-video-bg">
          <video autoPlay muted loop playsInline>
            <source src="https://assets.mixkit.co/videos/preview/mixkit-close-up-shot-of-a-forest-1197-large.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-floating-shapes">
          <span className="shape shape1"></span>
          <span className="shape shape2"></span>
          <span className="shape shape3"></span>
        </div>

        <div className="container">
          <div className="hero-content">
            <h1 className="reveal" ref={el => sectionRefs.current[0] = el}>
              We Are <span className="brand-accent">NOVA4MEDIA</span>
            </h1>
            <p className="reveal" ref={el => sectionRefs.current[1] = el}>
              South Africa's premier photography, videography, and digital media agency.
              We transform ideas into compelling visual stories that connect with audiences.
            </p>
            <button className="cta-button reveal" ref={el => sectionRefs.current[2] = el}>
              Watch Our Story <Play size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content reveal" ref={el => sectionRefs.current[3] = el}>
              <h2>Our Journey</h2>
              <p>
                Founded in Johannesburg, NOVA4MEDIA has grown from a passionate photography studio
                into a full-service media agency serving clients across South Africa and beyond.
              </p>
              <p>
                We started with a simple vision: to create exceptional visual content that tells
                authentic stories and helps businesses stand out in today's digital landscape.
              </p>
              <p>
                Today, we're proud to be trusted by leading brands, corporations, and creative
                professionals who value quality, innovation, and results-driven media solutions.
              </p>
            </div>
            <div className="story-image reveal" ref={el => sectionRefs.current[4] = el}>
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop" alt="Nova4Media Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card reveal" ref={el => sectionRefs.current[5 + idx] = el}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <div className="container">
          <div className="section-header reveal" ref={el => sectionRefs.current[9] = el}>
            <h2>What We <span className="brand-accent">Do</span></h2>
            <p>Comprehensive media solutions for modern businesses</p>
          </div>

          <div className="services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-card reveal" ref={el => sectionRefs.current[10 + idx] = el}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header reveal" ref={el => sectionRefs.current[14] = el}>
            <h2>Our <span className="brand-accent">Values</span></h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, idx) => (
              <div key={idx} className="value-card reveal" ref={el => sectionRefs.current[15 + idx] = el}>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <div className="section-header reveal" ref={el => sectionRefs.current[19] = el}>
            <h2>Meet Our <span className="brand-accent">Team</span></h2>
            <p>Talented professionals dedicated to your success</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="team-card reveal" ref={el => sectionRefs.current[20 + idx] = el}>
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-overlay">
                    <p>{member.bio}</p>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="cta-floating-shapes">
          <span className="shape shape1"></span>
          <span className="shape shape2"></span>
          <span className="shape shape3"></span>
        </div>
        <div className="container">
          <div className="cta-content reveal" ref={el => sectionRefs.current[24] = el}>
            <h2>Ready to Elevate Your Brand?</h2>
            <p>Let's collaborate to create media that makes an impact</p>
            <div className="cta-buttons">
              <button className="primary-btn">Start a Project</button>
              <button className="secondary-btn">View Our Work</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
