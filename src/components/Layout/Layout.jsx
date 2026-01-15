// Layout.js
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import ContactBar from "../ContactBar/ContactBar";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import "./Layout.css";

function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of all resources
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500); // Minimum 1.5 seconds for better UX
    };

    // If page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Fallback timeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="app-layout">
      {/* Preloader - Shows first */}
      <Preloader isLoading={isLoading} />
      
      {/* Main Content - Shows after preloader */}
      <div className={`main-content ${isLoading ? 'loading' : 'loaded'}`}>
        <ContactBar />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;