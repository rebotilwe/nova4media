// HeroSliderPremium.jsx - NO DUPLICATE NAVIGATION
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/effect-creative";
import "./HeroSlider.css";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&h=1080&fit=crop&auto=format",
    title: "Professional",
    highlight: "Photography",
    subtitle: "Capturing moments that last a lifetime with expert photography services",
    cta: "View Portfolio",
    number: "01"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1920&h=1080&fit=crop&auto=format",
    title: "Creative",
    highlight: "Vision",
    subtitle: "Transforming ordinary scenes into extraordinary memories",
    cta: "Our Services",
    number: "02"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=1920&h=1080&fit=crop&auto=format",
    title: "Perfect",
    highlight: "Moments",
    subtitle: "Professional photography for weddings, events, and portraits",
    cta: "Book Session",
    number: "03"
  },
];

function HeroSliderPremium() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Split text for animation
  const splitText = (text) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char" style={{ animationDelay: `${i * 0.03}s` }}>
        {char}
      </span>
    ));
  };

  return (
    <section className="hero-premium">
      {/* Animated Background Elements */}
      <div className="luxury-background">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="noise-overlay"></div>
      </div>

      {/* Main Swiper */}
      <div className="swiper-premium-container">
        <Swiper
          modules={[Autoplay, EffectCreative]}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          speed={1500}
          slidesPerView={1}
          autoplay={{ 
            delay: 8000,
            disableOnInteraction: false,
          }}
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="swiper-premium"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="premium-slide">
                {/* Background with Parallax */}
                <div className="slide-bg-container">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="slide-bg-premium"
                    style={{
                      transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`
                    }}
                  />
                  <div className="gradient-mask"></div>
                </div>

                {/* Content with Glass Effect */}
                <div className="slide-content-premium">
                  <div className="content-inner">
                    {/* Animated Number */}
                    <div className="slide-number-premium">
                      {slide.number}
                    </div>

                    {/* Title with Split Animation */}
                    <div className="title-container">
                      <h1 className="main-title-premium">
                        <span className="title-part">{splitText(slide.title)}</span>
                        <span className="title-highlight">{splitText(slide.highlight)}</span>
                      </h1>
                    </div>

                    {/* Subtitle */}
                    <p className="subtitle-premium">
                      {slide.subtitle}
                    </p>

                    {/* CTA Buttons with Hover Effects */}
                    <div className="cta-group-premium">
                      <a href="#" className="primary-cta-premium">
                        <span className="cta-text">{slide.cta}</span>
                        <span className="cta-icon">
                          <FiChevronRight />
                        </span>
                        <div className="cta-hover-effect"></div>
                      </a>
                      
                      <a href="/contact" className="secondary-cta-premium">
                        <span>Contact Us</span>
                        <FiArrowRight />
                      </a>
                    </div>

                    {/* Slide Info */}
                    <div className="slide-info">
                      <div className="info-item">
                        <span className="info-label">Studio</span>
                        <span className="info-value">NOVA4MEDIA</span>
                      </div>
                      <div className="info-divider"></div>
                      <div className="info-item">
                        <span className="info-label">Since</span>
                        <span className="info-value">2020</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="floating-elements-premium">
                  <div className="float-element el-1"></div>
                  <div className="float-element el-2"></div>
                  <div className="float-element el-3"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Controls */}
        <div className="premium-controls">
          <div className="progress-container">
            <div className="progress-track">
              <div 
                className="progress-fill-premium" 
                style={{ width: `${((activeIndex + 1) / slides.length) * 100}%` }}
              ></div>
            </div>
            <div className="progress-numbers">
              <span className="current-slide">0{activeIndex + 1}</span>
              <span className="total-slides">/0{slides.length}</span>
            </div>
          </div>

          <div className="control-buttons">
            <button className="control-btn prev-btn" onClick={() => {
              const swiper = document.querySelector('.swiper-premium').swiper;
              swiper.slidePrev();
            }}>
              PREV
            </button>
            <button className="control-btn next-btn" onClick={() => {
              const swiper = document.querySelector('.swiper-premium').swiper;
              swiper.slideNext();
            }}>
              NEXT
            </button>
          </div>
        </div>
      </div>

      {/* Weather/Time Widget */}
      <div className="widget-container">
        <div className="weather-widget">
          <div className="weather-icon">⛅</div>
          <div className="weather-info">
            <div className="temperature">23°C</div>
            <div className="condition">Mostly cloudy</div>
          </div>
        </div>
        <div className="time-widget">
          <div className="current-time">11:09 AM</div>
          <div className="current-date">1/15/2026</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator-premium">
        <div className="mouse-container">
          <div className="mouse-wheel"></div>
        </div>
        <span className="scroll-text">SCROLL</span>
      </div>
    </section>
  );
}

export default HeroSliderPremium;