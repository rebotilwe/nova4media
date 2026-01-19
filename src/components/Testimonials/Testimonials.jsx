import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    content:
      "Working with NOVA4MEDIA transformed our brand presence. Their creative vision and attention to detail are unmatched.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "David Lee",
    role: "CEO, StartupHub",
    content:
      "The team brought our ideas to life with professionalism and creativity. Highly recommended!",
    avatar:
      "https://images.unsplash.com/photo-1502767089025-6572583495f1?w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Creative Lead, BrandWorks",
    content:
      "Their attention to detail and aesthetic sense made all the difference in our project.",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&auto=format&fit=crop",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">
          What Our <span className="accent">Clients Say</span>
        </h2>

        <div className="testimonials-main">
          <div className="testimonial-featured">
            <div className="quote-icon">“</div>
            <p className="testimonial-text-large">{currentTestimonial.content}</p>
            <div className="testimonial-user-large">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="testimonial-avatar-large"
              />
              <div>
                <div className="testimonial-name-large">{currentTestimonial.name}</div>
                <div className="testimonial-role-large">{currentTestimonial.role}</div>
              </div>
            </div>
          </div>

          <div className="testimonials-nav">
            <button className="nav-btn prev-btn" onClick={prevTestimonial}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <div className="dots-container">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <button className="nav-btn next-btn" onClick={nextTestimonial}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="testimonials-grid-small">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`testimonial-card-small ${item.id === currentTestimonial.id ? 'active' : ''}`}
              onClick={() => setCurrentIndex(item.id - 1)}
            >
              <p className="testimonial-text-small">"{item.content}"</p>
              <div className="testimonial-user-small">
                <img src={item.avatar} alt={item.name} className="testimonial-avatar-small" />
                <div>
                  <div className="testimonial-name-small">{item.name}</div>
                  <div className="testimonial-role-small">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
