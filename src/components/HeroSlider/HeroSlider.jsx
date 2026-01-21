// HeroSliderPhotia.jsx
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import "./HeroSlider.css";

const slides = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&h=1080&fit=crop&auto=format",
    title: ["Professional", "Photography"],
    subtitle: ["Capturing moments", "that last a lifetime"],
    description: "Expert photography services for weddings, events, and portraits",
    buttonText: "View Portfolio"
  },
  {
    id: 2,
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: ["Creative", "Vision"],
    subtitle: ["Transforming scenes", "into memories"],
    description: "Bringing your creative ideas to life with professional expertise",
    buttonText: "Our Services"
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=1920&h=1080&fit=crop&auto=format",
    title: ["Perfect", "Moments"],
    subtitle: ["Where memories", "are made"],
    description: "Professional studio and outdoor photography sessions",
    buttonText: "Book Session"
  },
];

function HeroSliderPhotia() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="hero-slider-photia">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay, Pagination, EffectFade, EffectCreative]}
        effect="fade"
        creativeEffect={{
          prev: { translate: ["-100%", 0, -400] },
          next: { translate: ["100%", 0, -400] },
        }}
        speed={1200}
        slidesPerView={1}
        loop
        navigation={{
          nextEl: ".swiper-button-next-photia",
          prevEl: ".swiper-button-prev-photia",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-photia",
          bulletClass: "photia-bullet",
          bulletActiveClass: "photia-bullet-active",
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        onSlideChange={handleSlideChange}
        className="hero-swiper-photia"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-container-photia">
              {/* Background: Image or Video */}
              <div className="image-background">
                {slide.type === "image" && (
                  <img src={slide.src} alt="slide.title" className="slide-bg-photia" />
                )}
                {slide.type === "video" && (
                  <video
                    src={slide.src}
                    className="slide-bg-photia"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                )}
                <div className="gradient-overlay-photia"></div>
              </div>

              {/* Floating decorative circles */}
              <div className="floating-circles">
                <span className="circle circle1"></span>
                <span className="circle circle2"></span>
                <span className="circle circle3"></span>
              </div>

              {/* Brand Watermark */}
              <div className="brand-watermark">
                <span className="brand-text">NOVA</span>
                <span className="brand-number">4</span>
                <span className="brand-text">MEDIA</span>
              </div>

              {/* Slide Content */}
              <div className="slide-content-photia">
                <div className="content-wrapper-photia">
                  {/* Pre-title */}
                  <div className="slide-pre-title-photia">
                    <span className="pre-title-line"></span>
                    <span className="pre-title-text">WELCOME TO STUDIO</span>
                  </div>

                  {/* Title with staggered animation */}
                  <h1 className="slide-title-photia">
                    {slide.title.map((line, index) => (
                      <span
                        key={index}
                        style={{ display: "block", animationDelay: `${0.5 + index * 0.2}s` }}
                      >
                        {line}
                      </span>
                    ))}
                  </h1>

                  {/* Subtitle with staggered animation */}
                  <h2 className="slide-subtitle-photia">
                    {slide.subtitle.map((line, index) => (
                      <span
                        key={index}
                        style={{ display: "block", animationDelay: `${0.7 + index * 0.2}s` }}
                      >
                        {line}
                      </span>
                    ))}
                  </h2>

                  {/* Description */}
                  <p className="slide-description-photia">{slide.description}</p>

                  {/* Buttons */}
                  <div className="button-group-photia">
                    <a href="/portfolio" className="btn-primary-photia">
                      <span>{slide.buttonText}</span>
                      <svg className="btn-arrow-photia" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </a>
                    <a href="/contact" className="btn-secondary-photia">
                      <span>Get in Touch</span>
                      <div className="btn-line"></div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Slide Indicator */}
              <div className="slide-indicator-photia">
                <span className="current-slide">0{activeIndex + 1}</span>
                <div className="indicator-line"></div>
                <span className="total-slides">0{slides.length}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="swiper-button-prev-photia">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className="swiper-button-next-photia">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </Swiper>

      {/* Pagination */}
      <div className="swiper-pagination-photia"></div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator-photia">
        <div className="scroll-line-photia"></div>
        <span className="scroll-text-photia">SCROLL</span>
      </div>
    </section>
  );
}

export default HeroSliderPhotia;
