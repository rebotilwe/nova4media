import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import ContactBar from "../ContactBar/ContactBar";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import useScrollReveal from "../../hooks/useScrollReveal"
import "../../styles/scroll-animations.css"
import "./Layout.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop"

function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  // 🔥 Activate scroll animations globally
  useScrollReveal();

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Safety timeout (prevents infinite loader)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="app-layout">
      <Preloader isLoading={isLoading} />

      <div className={`main-content ${isLoading ? "loading" : "loaded"}`}>
        <ContactBar />
        <Navbar />

        <main>
          <Outlet />
        </main>

        <Footer />
        
  {/* ✅ Floating Scroll Button */}
  <ScrollToTop />
      </div>
    </div>
  );
}

export default Layout;
