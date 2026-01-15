// Preloader.jsx
import { useEffect, useState } from "react";
import "./Preloader.css";

function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable scrolling immediately
    document.body.classList.add('loading');
    
    // Minimum display time: 3 seconds
    const minimumDisplayTime = 3000; // 3 seconds
    
    // Start progress animation
    let startTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min(100, (elapsed / minimumDisplayTime) * 100);
      
      setProgress(Math.floor(calculatedProgress));
      
      // When we reach minimum time and 100% progress
      if (elapsed >= minimumDisplayTime && calculatedProgress >= 100) {
        clearInterval(progressInterval);
        
        // Add fade-out class to preloader
        const preloader = document.querySelector('.preloader');
        if (preloader) {
          preloader.classList.add('fade-out');
        }
        
        // Wait for fade-out animation, then hide and show content
        setTimeout(() => {
          setLoading(false);
          document.body.classList.remove('loading');
          document.body.classList.add('loaded');
        }, 800); // Match the CSS transition time
      }
    }, 50); // Update every 50ms for smooth progress

    // Force completion after 5 seconds max (safety)
    const timeout = setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);
      
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.classList.add('fade-out');
      }
      
      setTimeout(() => {
        setLoading(false);
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
      }, 800);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timeout);
      document.body.classList.remove('loading');
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        {/* Logo */}
        <div className="preloader-logo">Photia</div>
        
        {/* Loading Progress */}
        <div className="loading-progress">
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="progress-text">{progress}%</div>
          </div>
          
          <div className="loading-text">
            <span>Loading</span>
            <div className="loading-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>

        {/* Weather Info */}
        <div className="preloader-weather">
          <div className="weather-icon">☀️</div>
          <div className="weather-info">
            <div className="temperature">25°C</div>
            <div className="condition">Partly sunny</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;