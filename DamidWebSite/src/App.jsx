import { useState,useEffect,useRef } from 'react'

import Damid from './Damid';
import HomePage from './HomePage';
import './App.css'

function App() {
const TransiPoint = 400;

function changeURL(newPath) {
  const newURL = window.location.origin + newPath;
  window.history.pushState({}, '', newURL);
  updateFavicon();
  
}

function updateFavicon() {
  const path = window.location.pathname;
  const faviconElement = document.getElementById('favicon');
  
  if (path.includes('/object')) {
    faviconElement.href = '/pingdifflogoBlanc.png';
  } else if (path.includes('/another-path')) {
    faviconElement.href = '/pingdifflogoBlanc.png';
  } else {
    faviconElement.href = '/pingdifflogoBlanc.png';
  }
}

    
  

  return (
    <>
    <HomePage TransiPoint={TransiPoint}/>
      
      
    </>
  )

  
}

export default App
