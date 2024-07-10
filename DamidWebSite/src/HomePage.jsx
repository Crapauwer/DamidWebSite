import React, { useState, useEffect, useRef } from 'react';
import './HomePage.css';

function HomePage({TransiPoint}){
    const [isSticky, setIsSticky] = useState(true);
    const DivPrev = useRef(null);
    function getScrollToVhRatio() {
        // Hauteur totale de la fenêtre en pixels
        const windowHeight = window.innerHeight;
        
        // 1vh en pixels
        const oneVhInPixels = windowHeight / 100;
        
        // Ratio : 1 pixel de défilement = x vh
        const scrollToVhRatio = 1 / oneVhInPixels;
        
        return scrollToVhRatio;
      }


      // Pour convertir un nombre spécifique de pixels en vh
      function pixelsToVh(pixels) {
        return pixels * getScrollToVhRatio();
      }

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const triggerPoint = TransiPoint; 
  
        setIsSticky(scrollPosition < triggerPoint);
        if(!isSticky) {
           // DivPrev.current.style.setProperty('--pos-sticky', pixelsToVh(scrollPosition));
            
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return(
        <nav
        ref={DivPrev}
        >
        <div className="container">
      <div className="black-background"></div>
      <div className="beforediv"></div>
      <div className={`content ${isSticky ? 'sticky' : ''}`}>
        <h1>Your content goes here</h1>
        <p>This div starts 15vh from the top of the page.</p>
      </div>
    </div>
    </nav>

    )
        
    
}

export default HomePage;