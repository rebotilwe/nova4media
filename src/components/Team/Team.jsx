import React, { useRef } from 'react';
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

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
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
            Explore traffic sources, page behavior, conversions, and more to gain deep insight into your audience. With us, your business doesn’t just adapt—it evolves.
          </p>
        </div>

        <div className="carousel-wrapper">
          <button className="carousel-arrow left" onClick={() => scroll('left')}>
            <FaChevronLeft />
          </button>
          <div className="team-carousel" ref={carouselRef}>
            {teamMembers.map(member => (
              <div key={member.id} className="member-card">
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
          <button className="carousel-arrow right" onClick={() => scroll('right')}>
            <FaChevronRight />
          </button>
        </div>

        {/* <div className="clients-section">
          <h3 className="clients-title">WE WORKED WITH THE WORLD'S BEST COMPANIES</h3>
          <div className="clients-logos">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E', 'Company F'].map((company, index) => (
              <div key={index} className="client-logo">
                <div className="logo-placeholder">{company}</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Team;
