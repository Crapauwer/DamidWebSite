import React, { useState, useEffect, useRef } from 'react';
import Anim from './Anim.jsx';
import VirtualScroll from 'virtual-scroll'
import './NavBar.css';

const NavBar = () => {
  const [targetScrollPosition, setTargetScrollPosition] = useState(0);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const animationRef = useRef(null);
  const navbarRef = useRef(null);
  const svgRef = useRef(null);

  /* useEffect(() => {
    const handleScroll = () => {
      setCurrentScrollPosition(window.scrollY);        
    }
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); */

  /* useEffect(() => {
    const animate = () => {
        
      const diff = targetScrollPosition - currentScrollPosition;
      const newPosition = window.scrollY;
      setCurrentScrollPosition(prev => {
        const diff = window.scrollY - prev;
        if (Math.abs(diff) < 0.1) {
          cancelAnimationFrame(animationRef.current);
          return window.scrollY;
        } else {
          return prev + diff * 0.1;
        }
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [targetScrollPosition, currentScrollPosition]);
 */
  /* useEffect(() => {
    const transitionPoint = TransiPoint;
    const progress = Math.min(currentScrollPosition / transitionPoint, 1);
    
    if (navbarRef.current) {
      navbarRef.current.style.setProperty('--scroll-progress', progress);
      //navbarRef.current.style.height = `${100-progress*100}vh`;
      //console.log(progress);
    }

    ;
     
  }, [currentScrollPosition]); */

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
        <Anim/>
        </div>
        
        {/* <h1>Logo</h1>
        <ul>
          <li><a href="#home">{currentScrollPosition}</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul> */}
      </div>
    </nav>
  );
};

export default NavBar;