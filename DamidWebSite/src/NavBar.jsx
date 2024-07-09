import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [targetScrollPosition, setTargetScrollPosition] = useState(0);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const animationRef = useRef(null);
  const navbarRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {

        setCurrentScrollPosition(window.scrollY);
        console.log("scroll");
        console.log(window.scrollY);
        
    }
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
        
      const diff = targetScrollPosition - currentScrollPosition;
      const newPosition = window.scrollY;
      
      if (Math.abs(diff) < 0.1) {
        setCurrentScrollPosition(targetScrollPosition);
        
      } else {
        const newPosition = currentScrollPosition + diff * 0.1;
        setCurrentScrollPosition(newPosition);
        /* const height = `calc(100vh - ${currentScrollPosition * 85}vh)`;
        const backgroundColor = `rgba(255, 255, 255, ${0.5 + currentScrollPosition * 0.5})`;
        navbarRef.current.style.height = height;
        navbarRef.current.style.backgroundColor = backgroundColor; */
        
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [targetScrollPosition, currentScrollPosition]);

  useEffect(() => {
    const transitionPoint = 300;
    const progress = Math.min(currentScrollPosition / transitionPoint, 1);
    
    if (navbarRef.current) {
      navbarRef.current.style.height = `${100-progress*100}vh`;
    }

    // Contrôle de l'animation SVG
    if (svgRef.current) {
      const svgElement = svgRef.current;
      const animationElements = svgElement.querySelectorAll('animate, animateTransform, animateMotion');
      animationElements.forEach(animation => {
        animation.setAttribute('end', `${progress * 100}%`);
      });
    }
    ;
    console.log("value :");  
  }, [currentScrollPosition]);

  const transitionPoint = 300;
  const progress = Math.min(currentScrollPosition / transitionPoint, 1);
  const isFullScreen = progress < 1;

  return (
    <nav 
      ref={navbarRef}
      className={`navbar ${isFullScreen ? 'fullscreen' : ''}`}
    >
      <div className="navbar-content">
        <div className="svg-container" ref={svgRef}>
          {/* Insérez votre SVG ici */}
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4" fill="none">
              <animate 
                attributeName="r" 
                from="0" to="40" 
                dur="2s" 
                begin="0s" 
                fill="freeze" 
              />
            </circle>
          </svg>
        </div>
        <h1>Logo</h1>
        <ul>
          <li><a href="#home">{currentScrollPosition}</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;