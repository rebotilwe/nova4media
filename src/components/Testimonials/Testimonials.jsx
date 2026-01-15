// components/Testimonials/Testimonials.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Charli Hapan',
      role: 'Marketing Director',
      text: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
      avatarColor: '#4a6fa8'
    },
    {
      id: 2,
      name: 'Julie Gillespie',
      role: 'Creative Lead',
      text: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
      avatarColor: '#6b93d6'
    },
    {
      id: 3,
      name: 'Melanie Krueger',
      role: 'Product Manager',
      text: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
      avatarColor: '#5a7fb0'
    },
    {
      id: 4,
      name: 'Sydney Gregory',
      role: 'CEO, TechCorp',
      text: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
      avatarColor: '#4a6fa8'
    },
    {
      id: 5,
      name: 'Dahlia Chang',
      role: 'Founder, DesignCo',
      text: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
      avatarColor: '#6b93d6'
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">WHAT PEOPLE SAY</span>
          <h2 className="section-title">Trusted by Clients Worldwide</h2>
        </div>

        <div className="testimonials-slider">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-card">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div 
                      className="author-avatar"
                      style={{ backgroundColor: testimonial.avatarColor }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;