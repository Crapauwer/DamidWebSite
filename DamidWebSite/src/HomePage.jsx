import React, { useState, useEffect, useRef } from "react";
import NavBar from './NavBar';
import VirtualScroll from 'virtual-scroll'
import "./HomePage.css";

function HomePage({ TransiPoint }) {
  const [isSticky, setIsSticky] = useState(Boolean);
  const [offsetSousBody, setOffset] = useState(0);
  const DivPrev = useRef(null);
  const body = useRef(null);
  var scrollValue = 0;
  var CurrentScrollValue = 0;
  var scrollTimeout = 0;
/* 
  const scroller = new VirtualScroll()
scroller.on(event => {
	if (event.deltaY > 0) {
    scrollValue++;
    if(scrollValue>2){
      scrollValue = 2;
    }
    console.log(scrollValue);
  } else {
    scrollValue--;
    if(scrollValue<0){
      scrollValue = 0;
    }
    console.log(scrollValue);
  }
  EmulScroll();
})
document.addEventListener('touchmove', function(e) { 
  e.preventDefault(); 
}); */

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
  const handleScroll = () => {
    //console.log(window.scrollY);
    clearTimeout(scrollTimeout);

  // Définir un nouveau délai de 100ms après le dernier scroll
  scrollTimeout = setTimeout(() => {
    
    console.log('Action après 10ms sans défilement supplémentaire');
  }, 200);
  };

  const EmulScroll = () => {
    switch(scrollValue){
      case 0:
        console.log("scrollTo");
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        break;
      case 1:
        console.log("scrollTo");
        window.scrollTo({
          top: 400,
          behavior: 'smooth'
        });
        break;
        case 2:
          break;
    }
  };
  const handleWheel = (event) => {
    

    
     const scrollPosition = window.scrollY;
    const triggerPoint = TransiPoint;

    console.log("ISCROLLING");
    if (scrollPosition < triggerPoint) {
      
    } else {
      setIsSticky(false);
    }

  };

   useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []); 

  return (
    <nav>
      <div className="sous-body" ref={body}>
      <NavBar TransiPoint={TransiPoint}/>
      <div className="Sentance" ref={body}>
      Free and competitive games for everyone
      </div>
      <div className="damid">
        <div className={`content`}>
        <div className="image-container">
    <img src="./src/assets/logo.png"/>
  </div>
        </div>
      </div>
      <div className="footer" ref={body}></div>
      </div>
    </nav>
  );
}

export default HomePage;
