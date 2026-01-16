import React, { useEffect, useRef } from 'react';
import './ProcessSection.css';

const processSteps = [
  {
    id: 1,
    number: '01',
    title: 'Discovery & Planning',
    description: 'We begin by understanding your vision, goals, and requirements to create a tailored strategy.',
    icon: '🔍',
    color: '#4a6fa8'
  },
  {
    id: 2,
    number: '02',
    title: 'Concept Development',
    description: 'Creative brainstorming and concept creation to bring your vision to life visually.',
    icon: '💡',
    color: '#e74c3c'
  },
  {
    id: 3,
    number: '03',
    title: 'Production & Shooting',
    description: 'Professional photography and videography execution with top-tier equipment.',
    icon: '📸',
    color: '#2ecc71'
  },
  {
    id: 4,
    number: '04',
    title: 'Editing & Refinement',
    description: 'Post-production magic with careful editing, color grading, and retouching.',
    icon: '🎨',
    color: '#9b59b6'
  },
  {
    id: 5,
    number: '05',
    title: 'Delivery & Support',
    description: 'Final delivery of assets and ongoing support to ensure your complete satisfaction.',
    icon: '🚀',
    color: '#f39c12'
  }
];

function ProcessSection() {
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    stepRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="process-section">
      <div className="floating-elements-process">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      <div className="container">
        <div className="section-header reveal up">
          <div className="section-label">
            <span className="label-line"></span>
            <span className="label-text">OUR PROCESS</span>
          </div>
          <h2>How We <span className="accent">Create Magic</span></h2>
          <p className="section-subtitle">
            A step-by-step approach to transforming your ideas into stunning visual content
          </p>
        </div>

        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              ref={el => (stepRefs.current[index] = el)}
              className="process-step reveal fade-in"
              style={{ '--step-color': step.color, transitionDelay: `${index * 150}ms` }}
            >
              <div className="step-number">{step.number}</div>

              <div className="step-icon">
                <div className="icon-wrapper">
                  <span className="icon-emoji">{step.icon}</span>
                  <div className="icon-ring"></div>
                </div>
              </div>

              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>

              {index < processSteps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProcessSection;
