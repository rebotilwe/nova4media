// HeroSlider.js
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "./HeroSlider.css";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&h=1080&fit=crop&auto=format",
    title: "Professional Photography",
    subtitle: "Capturing moments that last a lifetime with expert photography services",
    buttonText: "View Portfolio"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1920&h=1080&fit=crop&auto=format",
    title: "Creative Vision",
    subtitle: "Transforming ordinary scenes into extraordinary memories",
    buttonText: "Our Services"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=1920&h=1080&fit=crop&auto=format",
    title: "Perfect Moments",
    subtitle: "Professional photography for weddings, events, and portraits",
    buttonText: "Book Session"
  },
];

function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="hero-slider">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 6000 }}
        loop
        speed={1200}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="slide">
              <img src={slide.image} alt={slide.title} className="slide-bg" />
              <div className="slide-overlay"></div>

              <div className="slide-content">
                <h1 className={`slide-title ${activeIndex === index ? "animate" : ""}`}>
                  {slide.title}
                </h1>
                <p className={`slide-subtitle ${activeIndex === index ? "animate" : ""}`}>
                  {slide.subtitle}
                </p>
                <div className="button-group">
                  <a href="/portfolio" className={`btn-primary ${activeIndex === index ? "animate" : ""}`}>
                    {slide.buttonText}
                  </a>
                  <a href="/contact" className={`btn-outline ${activeIndex === index ? "animate" : ""}`}>
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>SCROLL DOWN</span>
      </div>
    </section>
  );
}

export default HeroSlider;
