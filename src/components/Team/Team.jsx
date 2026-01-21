import React, { useRef, useState } from 'react';
import './Team.css';
import { FaInstagram, FaLinkedin, FaTwitter, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Team() {
  const teamMembers = [
    { id: 1, name: 'Matt Kabus', role: 'CEO & Founder', photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 2, name: 'Ishraq Khan', role: 'Business Development', photo: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { id: 3, name: 'John Dosh', role: 'Strategy Consultant', photo: 'https://randomuser.me/api/portraits/men/56.jpg' },
    { id: 4, name: 'Daniyal Micle', role: 'Business Development', photo: 'https://randomuser.me/api/portraits/men/67.jpg' }
  ];

  const carouselRef = useRef(null);
  const [hoveredMember, setHoveredMember] = useState(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const cardWidth = 260; // Adjusted for spacing
      carouselRef.current.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="team-section">
      {/* Floating blurred circles for depth */}
      <div className="floating-elements-team">
        <div className="circle t-circle-1"></div>
        <div className="circle t-circle-2"></div>
        <div className="circle t-circle-3"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <span className="section-label">OUR PROFESSIONAL TEAM</span>
          <h2 className="section-title">
            Meet the <span className="accent">Creative Minds</span> Behind Our Magic
          </h2>
          <p className="section-description">
            Our talented team combines technical expertise with artistic vision to deliver stunning visual stories that captivate and inspire.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="team-grid-desktop">
          {teamMembers.map(member => (
            <div 
              key={member.id} 
              className="member-card-desktop"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="member-avatar-desktop">
                <img src={member.photo} alt={member.name} />
                <div className="avatar-overlay">
                  <div className="social-links">
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaTwitter /></a>
                  </div>
                </div>
              </div>
              <div className="member-info-desktop">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="carousel-wrapper">
          <button className="carousel-arrow left" onClick={() => scroll('left')} aria-label="Previous">
            <FaChevronLeft />
          </button>
          <div className="team-carousel" ref={carouselRef}>
            {teamMembers.map(member => (
              <div 
                key={member.id} 
                className={`member-card ${hoveredMember === member.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="member-avatar">
                  <img src={member.photo} alt={member.name} />
                  <div className="overlay">
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaTwitter /></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-arrow right" onClick={() => scroll('right')} aria-label="Next">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Team;
