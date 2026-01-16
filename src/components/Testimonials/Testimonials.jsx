import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    content: "Working with NOVA4MEDIA transformed our brand presence. Their creative vision and attention to detail are unmatched.",
    rating: 5,
    project: "Corporate Brand Campaign",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "David Lee",
    role: "CEO, StartupHub",
    content: "The team brought our ideas to life with professionalism and creativity. Highly recommended!",
    rating: 5,
    project: "Product Launch Campaign",
    avatar: "https://images.unsplash.com/photo-1502767089025-6572583495f1?w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Creative Lead, BrandWorks",
    content: "Their attention to detail and aesthetic sense made all the difference in our project.",
    rating: 5,
    project: "Rebranding Project",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&auto=format&fit=crop"
  }
];

const TestimonialsSection = React.forwardRef((props, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonials-section" ref={ref}>
      {/* Parallax Background */}
      <div className="testimonials-bg">
        <div className="bg-layer layer-1"></div>
        <div className="bg-layer layer-2"></div>
      </div>

      {/* Floating Quotes */}
      <div className="floating-quotes">
        <div className="quote">"</div>
        <div className="quote">"</div>
        <div className="quote">"</div>
      </div>

      <div className="container">
        <div className="testimonials-header">
          <h2>What Our <span className="accent">Clients Say</span></h2>
          <p>Trusted by brands and individuals worldwide</p>
        </div>

        <div className="testimonials-carousel">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={el => (cardRefs.current[index] = el)}
              className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="quote-icon">“</div>
              <p className="testimonial-text">{testimonial.content}</p>
              <div className="testimonial-author">
                <img className="author-avatar" src={testimonial.avatar} alt={testimonial.name} />
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="testimonials-pagination">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`pagination-bullet ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
});

export default TestimonialsSection;
