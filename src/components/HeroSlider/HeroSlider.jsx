import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroSlider.css";

/* ---------------- TEXT REVEAL COMPONENT ---------------- */

const TextReveal = ({ text, className }) => {
  const letters = text.split("");

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.04 },
    },
  };

  const child = {
    hidden: {
      y: 80,
      opacity: 0,
      filter: "blur(6px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, i) => (
        <motion.span key={i} variants={child}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

/* ---------------- SLIDES DATA ---------------- */

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&q=80",
    title: "Creative Visual Experiences",
    subtitle:
      "We craft cinematic digital experiences that elevate brands and inspire audiences.",
    buttonText: "View Portfolio",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1920&q=80",
    title: "Storytelling Through Motion",
    subtitle:
      "Transforming ideas into immersive visual journeys through creativity and innovation.",
    buttonText: "Our Services",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=1920&q=80",
    title: "Design That Moves People",
    subtitle:
      "Powerful design systems that communicate, engage, and convert.",
    buttonText: "Get Started",
  },
];

/* ---------------- MAIN COMPONENT ---------------- */

export default function HeroSlider() {
  useEffect(() => {
    const videos = document.querySelectorAll("video");
    videos.forEach((v) => v.play());
  }, []);

  return (
    <section className="hero">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop
        speed={1400}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">
              <img src={slide.image} alt="" className="hero-bg" />
              <div className="hero-overlay" />

              <div className="hero-content">
                <TextReveal
                  text={slide.title}
                  className="hero-title"
                />

                <motion.p
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  {slide.subtitle}
                </motion.p>

                <motion.div
                  className="hero-glass-card"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <div>🎥 12+ Years Experience</div>
                  <div>📸 250+ Projects</div>
                  <div>🏆 Award Winning</div>
                </motion.div>

                <motion.div
                  className="hero-buttons"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                >
                  <a href="/" className="btn-primary">
                    {slide.buttonText}
                  </a>
                  <a href="/" className="btn-outline">
                    Contact Us
                  </a>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <span />
        </div>
        <p>Scroll</p>
      </div>
    </section>
  );
}
