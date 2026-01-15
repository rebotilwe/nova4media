// components/Team/Team.js
import React from 'react';
import './Team.css';

function Team() {
  // In a real site, you would add actual team member photos and data here
  const teamMembers = [
    { id: 1, name: 'John Anderson', role: 'Lead Photographer' },
    { id: 2, name: 'Sarah Miller', role: 'Creative Director' },
    { id: 3, name: 'David Chen', role: 'Event Specialist' },
    { id: 4, name: 'Emma Wilson', role: 'Portrait Artist' },
  ];

  return (
    <section id="team" className="team-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">OUR PROFESSIONAL TEAM</span>
          <h2 className="section-title">
            Team is large or small, whether you Want group team photography
          </h2>
          <p className="section-description">
            Explore traffic sources, page behavior, conversions and more to gain deep insight into your audience. With us, your business doesn’t just adapt it evolves.
          </p>
        </div>

        {/* This is a placeholder - Photia likely has team member photos here */}
        <div className="team-placeholder">
          <div className="placeholder-content">
            <div className="placeholder-icon">👥</div>
            <h3>Meet Our Team</h3>
            <p>Team member photos and bios would be displayed here in a grid or slider layout.</p>
            <div className="placeholder-members">
              {teamMembers.map(member => (
                <div key={member.id} className="member-card">
                  <div className="member-avatar">
                    <div className="avatar-placeholder"></div>
                  </div>
                  <div className="member-info">
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos Section */}
        <div className="clients-section">
          <h3 className="clients-title">WE WORKED WITH THE WORLD'S BEST COMPANIES</h3>
          <div className="clients-logos">
            {/* Add your client logo images here */}
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E', 'Company F'].map((company, index) => (
              <div key={index} className="client-logo">
                <div className="logo-placeholder">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;