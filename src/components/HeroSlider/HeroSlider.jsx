// HeroSliderEnhanced.jsx
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/parallax";
import "./HeroSlider.css";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&h=1080&fit=crop&auto=format",
    video: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-camera-taking-a-photo-41475-large.mp4", // Optional video
    title: "Professional Photography",
    subtitle: "Capturing moments that last a lifetime with expert photography services",
    buttonText: "View Portfolio",
    accentColor: "#4a6fa8"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1920&h=1080&fit=crop&auto=format",
    title: "Creative Vision",
    subtitle: "Transforming ordinary scenes into extraordinary memories",
    buttonText: "Our Services",
    accentColor: "#e74c3c"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=1920&h=1080&fit=crop&auto=format",
    title: "Perfect Moments",
    subtitle: "Professional photography for weddings, events, and portraits",
    buttonText: "Book Session",
    accentColor: "#2ecc71"
  },
];

function HeroSliderEnhanced() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const swiperRef = useRef(null);

  // Mouse move effect for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    // Add color transition effect
    document.documentElement.style.setProperty('--accent-color', slides[swiper.realIndex].accentColor);
  };

  return (
    <>
      <section className="hero-slider-enhanced">
        {/* Particle Background */}
        <div className="particles"></div>
        
        {/* Custom Cursor */}
        <div 
          className="custom-cursor"
          style={{ 
            left: `${mousePosition.x + 50}%`,
            top: `${mousePosition.y + 50}%`
          }}
        ></div>

        {/* Progress Bar */}
        <div className="scroll-progress">
          <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay, Pagination, EffectFade, Parallax]}
          effect="fade"
          speed={1500}
          parallax={true}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}">
                <span class="bullet-inner">0${index + 1}</span>
              </span>`;
            },
          }}
          autoplay={{ 
            delay: 7000,
            disableOnInteraction: false,
          }}
          loop
          onSlideChange={handleSlideChange}
          className="hero-swiper-enhanced"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="slide-container">
                {/* Video Background Option */}
                {slide.video ? (
                  <div className="video-container">
                    <video 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      className="video-bg"
                    >
                      <source src={slide.video} type="video/mp4" />
                    </video>
                    <div className="video-overlay"></div>
                  </div>
                ) : (
                  <>
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="slide-bg" 
                      style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`
                      }}
                    />
                    <div className="slide-overlay"></div>
                  </>
                )}

                {/* Animated Gradient Layer */}
                <div className="gradient-layer"></div>

                <div className="slide-content">
                  {/* Subtle Animated Background Text */}
                  <div 
                    className="background-text"
                    data-swiper-parallax="-200"
                  >
                    NOVA<span>4</span>MEDIA
                  </div>

                  {/* Main Content */}
                  <div className="content-wrapper">
                    <h6 
                      className="slide-pre-title"
                      data-swiper-parallax="-100"
                    >
                      WELCOME TO STUDIO
                    </h6>
                    
                    <h1 
                      className="slide-title"
                      data-swiper-parallax="-300"
                    >
                      <span className="title-line">
                        {slide.title.split(' ').slice(0, 2).join(' ')}
                      </span>
                      <span className="title-line">
                        {slide.title.split(' ').slice(2).join(' ')}
                      </span>
                    </h1>
                    
                    <p 
                      className="slide-subtitle"
                      data-swiper-parallax="-400"
                    >
                      {slide.subtitle}
                    </p>

                    <div className="button-group">
                      <a 
                        href="/portfolio" 
                        className="btn-magnetic"
                        data-swiper-parallax="-500"
                      >
                        <span className="btn-text">{slide.buttonText}</span>
                        <span className="btn-icon">
                          <svg viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </span>
                        <span className="btn-hover-bg"></span>
                      </a>
                      
                      <a 
                        href="/contact" 
                        className="btn-outline-magnetic"
                        data-swiper-parallax="-600"
                      >
                        <span>Contact Us</span>
                        <span className="btn-arrow">→</span>
                      </a>
                    </div>
                  </div>

                  {/* Social/Info Sidebar */}
                  <div className="slide-sidebar">
                    <div className="social-links">
                      <a href="#" className="social-link">FB</a>
                      <a href="#" className="social-link">IG</a>
                      <a href="#" className="social-link">TW</a>
                    </div>
                    <div className="slide-number">
                      <span className="current">0{index + 1}</span>
                      <span className="divider">/</span>
                      <span className="total">0{slides.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation */}
          <div className="swiper-button-prev">
            <div className="arrow-icon">←</div>
            <div className="nav-text">Prev</div>
          </div>
          <div className="swiper-button-next">
            <div className="nav-text">Next</div>
            <div className="arrow-icon">→</div>
          </div>
        </Swiper>

        {/* Scroll Indicator with Animation */}
        <div className="scroll-indicator-enhanced">
          <div className="scroll-text">
            <span>S</span>
            <span>C</span>
            <span>R</span>
            <span>O</span>
            <span>L</span>
            <span>L</span>
          </div>
          <div className="scroll-line">
            <div className="line-progress"></div>
          </div>
        </div>
      </section>

      {/* Floating Elements (for extra wow) */}
      <div className="floating-elements">
        <div className="float-circle circle-1"></div>
        <div className="float-circle circle-2"></div>
        <div className="float-circle circle-3"></div>
      </div>
    </>
  );
}

export default HeroSliderEnhanced;