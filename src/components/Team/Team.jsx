import React, { useRef, useState } from 'react';
import './Team.css';
import { FaInstagram, FaLinkedin, FaTwitter, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Team() {
  const teamMembers = [
    { id: 1, name: 'John Anderson', role: 'Lead Photographer', photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 2, name: 'Sarah Miller', role: 'Creative Director', photo: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: 3, name: 'David Chen', role: 'Event Specialist', photo: 'https://randomuser.me/api/portraits/men/56.jpg' },
    { id: 4, name: 'Emma Wilson', role: 'Portrait Artist', photo: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { id: 5, name: 'Alex Brown', role: 'Videographer', photo: 'https://randomuser.me/api/portraits/men/72.jpg' },
    { id: 6, name: 'Olivia Green', role: 'Photo Editor', photo: 'https://randomuser.me/api/portraits/women/77.jpg' },
  ];

  const carouselRef = useRef(null);
  const [hoveredMember, setHoveredMember] = useState(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const cardWidth = 240; // Approximate card width on mobile
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="team-section">
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
                    <a href="#" aria-label="Instagram"><FaInstagram /></a>
                    <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href="#" aria-label="Twitter"><FaTwitter /></a>
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
                    <a href="#" aria-label="Instagram"><FaInstagram /></a>
                    <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href="#" aria-label="Twitter"><FaTwitter /></a>
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