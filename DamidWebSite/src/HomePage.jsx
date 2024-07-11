import React, { useState, useEffect, useRef } from "react";
import NavBar from './NavBar';
import VirtualScroll from 'virtual-scroll'
import "./HomePage.css";

function HomePage({ TransiPoint }) {
  const [isSticky, setIsSticky] = useState(Boolean);
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
    setIsSticky(scrollPosition < triggerPoint);
    if (scrollPosition < triggerPoint) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
    if (scrollPosition < triggerPoint) {
      DivPrev.current.style.setProperty(
        "--pos-sticky",
        pixelsToVh(scrollPosition)
      );
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
      <NavBar TransiPoint={TransiPoint}/>
      <div className="container" ref={body}>
        {/* <div className="black-background"></div> */}
        <div
          className={`preDiv ${isSticky ? "sticky" : ""}`}
          ref={DivPrev}
        ></div>
        <div className={`content ${isSticky ? "sticky" : ""}`}>
        <div className="image-container">
    <img src="./src/assets/logo.png"/>
  </div>
        </div>
      </div>
    </nav>
  );
}

export default HomePage;
