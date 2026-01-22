// HeroSliderPhotiaStyle.jsx - FINAL VERSION
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./HeroSlider.css";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&h=1080&fit=crop&auto=format",
    title: "Professional Photography",
    subtitle: "Capturing moments that last a lifetime",
    description: "Expert photography services for weddings, events, and portraits",
    buttonText: "View Portfolio",
    accentColor: "#c9a96e"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1920&h=1080&fit=crop&auto=format",
    title: "Creative Vision",
    subtitle: "Transforming scenes into memories",
    description: "Bringing your creative ideas to life with professional expertise",
    // buttonText: "Our Services",
    accentColor: "#c9a96e"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=1920&h=1080&fit=crop&auto=format",
    title: "Perfect Moments",
    subtitle: "Where memories are made",
    description: "Professional studio and outdoor photography sessions",
    buttonText: "Book Session",
    accentColor: "#c9a96e"
  },
];

function HeroSliderPhotiaStyle() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  // Preload next image for smoother transitions
  const preloadImages = () => {
    slides.forEach((slide, index) => {
      const nextIndex = (index + 1) % slides.length;
      const img = new Image();
      img.src = slides[nextIndex].image;
    });
  };

  // Preload images on mount
  useState(() => {
    preloadImages();
  }, []);

  return (
    <section className="hero-slider-photia" aria-label="Hero Slider">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1200}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-photia',
          prevEl: '.swiper-button-prev-photia',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-photia',
          bulletClass: 'photia-bullet',
          bulletActiveClass: 'photia-bullet-active',
          renderBullet: function (index, className) {
            return `<span class="${className}" aria-label="Go to slide ${index + 1}"></span>`;
          },
        }}
        autoplay={{ 
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // Pause on hover for better UX
        }}
        loop
        onSlideChange={handleSlideChange}
        className="hero-swiper-photia"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-container-photia">
              {/* Background Image */}
              <div className="image-background">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="slide-bg-photia"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
                <div className="gradient-overlay-photia" aria-hidden="true"></div>
              </div>

              {/* Subtle Branding */}
              <div className="brand-watermark" aria-hidden="true">
                <span className="brand-text">NOVA</span>
                <span className="brand-number">4</span>
                <span className="brand-text">MEDIA</span>
              </div>

              {/* Main Content */}
              <div className="slide-content-photia">
                <div className="content-wrapper-photia">
                  {/* Pre-title */}
                  <div className="slide-pre-title-photia">
                    <span className="pre-title-line" aria-hidden="true"></span>
                    <span className="pre-title-text">WELCOME TO STUDIO</span>
                  </div>

                  {/* Main Title */}
                  <h1 className="slide-title-photia">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <h2 className="slide-subtitle-photia">
                    {slide.subtitle}
                  </h2>

                  {/* Description */}
                  <p className="slide-description-photia">
                    {slide.description}
                  </p>

                  {/* Buttons */}
                  <div className="button-group-photia">
                    <a 
                      href="/projects" 
                      className="btn-primary-photia"
                      aria-label={`${slide.buttonText} - Opens portfolio page`}
                    >
                      <span>{slide.buttonText}</span>
                      <svg 
                        className="btn-arrow-photia" 
                        viewBox="0 0 24 24" 
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </a>
                    
                    <a 
                      href="/contact" 
                      className="btn-secondary-photia"
                      aria-label="Get in Touch - Opens contact page"
                    >
                      <span>Get in Touch</span>
                      <div className="btn-line" aria-hidden="true"></div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Slide Indicator */}
              <div className="slide-indicator-photia" aria-hidden="true">
                <span className="current-slide">0{activeIndex + 1}</span>
                <div className="indicator-line"></div>
                <span className="total-slides">0{slides.length}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <button 
          className="swiper-button-prev-photia"
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
        <button 
          className="swiper-button-next-photia"
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </Swiper>

      {/* Pagination */}
      <div 
        className="swiper-pagination-photia" 
        role="navigation" 
        aria-label="Slide navigation"
      ></div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator-photia" aria-hidden="true">
        <div className="scroll-line-photia"></div>
        <span className="scroll-text-photia">SCROLL</span>
      </div>
    </section>
  );
}
export default HeroSliderPhotiaStyle;