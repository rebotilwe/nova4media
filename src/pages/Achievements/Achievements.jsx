// components/Achievements/Achievements.js - UPDATED
import React, { useEffect, useState, useRef } from 'react';
import './Achievements.css';

const stats = [
  { id: 1, number: 15, suffix: 'K', label: 'YEARS EXPERIENCE' },
  { id: 2, number: 25, suffix: 'K', label: 'PROJECTS DONE SUCCESSFULLY' },
  { id: 3, number: 10, suffix: 'K', label: 'MARKETING TEAM MEMBER' },
  { id: 4, number: 8, suffix: 'K', label: 'WE ACHIEVED AWARDS' }
];

function Achievements() {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            stats.forEach((stat, index) => {
              const duration = 2000;
              const increment = stat.number / (duration / 16); // 60fps
              let current = 0;
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.number) {
                  current = stat.number;
                  clearInterval(timer);
                }
                
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[index] = Math.floor(current);
                  return newCounters;
                });
              }, 16);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section id="achievements" className="achievements-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">OUR ACHIEVEMENT</span>
          <h2 className="section-title">
            Drive Growth by Reaching Specific Audiences at Fixed Service Rates
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-number-wrapper">
                <span className="stat-number">{counters[index]}</span>
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
              
              {/* Photia-style decorative lines */}
              <div className="photia-decoration">
                <div className="dec-line line-1"></div>
                <div className="dec-line line-2"></div>
                <div className="dec-dot"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;