// Home.jsx
import { useRef, useEffect } from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import Services from "../../pages/Services/Services";
import Achievements from "../../pages/Achievements/Achievements";
import Team from "../../components/Team/Team";
import Testimonials from "../../components/Testimonials/Testimonials";
import RecentProjects from "../../pages/RecentProjects/RecentProjects";
import ContactSection from "../../pages/Contact/Contact";
import BlogPreview from "../../components/BlogPreview/BlogPreview";
import ProcessSection from "../../components/ProcessSection/ProcessSection";
import "./Home.css";

function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current.filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Animate once
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      {/* Floating Background Elements */}
      <div className="floating-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <HeroSlider />
      </section>

      {/* Recent Projects */}
      <section
        className="section-wrapper projects-section"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <RecentProjects/>
      </section>

      {/* Services */}
      <section
        className="section-wrapper services-section"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <Services />
      </section>

      {/* Our Process */}
      <section
        className="section-wrapper process-section"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <ProcessSection />
      </section>

      {/* Testimonials */}
      <section
        className="section-wrapper testimonials-section"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <Testimonials />
      </section>

      {/* Team */}
      <section
        className="section-wrapper team-section"
        ref={(el) => (sectionsRef.current[4] = el)}
      >
        <Team />
      </section>

      {/* Blog */}
      <section
        className="section-wrapper blog-section"
        ref={(el) => (sectionsRef.current[5] = el)}
      >
        <BlogPreview />
      </section>

      {/* Achievements */}
      {/* <section
        className="section-wrapper achievements-section"
        ref={(el) => (sectionsRef.current[6] = el)}
      >
        <Achievements />
      </section> */}

      {/* Contact CTA */}
      <section
        className="section-wrapper contact-section"
        ref={(el) => (sectionsRef.current[7] = el)}
      >
        <ContactSection />
      </section>

      {/* Background Gradients */}
      <div className="background-gradients">
        <div className="gradient gradient-1" />
        <div className="gradient gradient-2" />
      </div>
    </div>
  );
}

export default Home;
