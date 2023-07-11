import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [frameCount, setFrameCount] = useState(0);
  const [divShadow, setShadow] = useState({});
  const [Soleil, setSoleil] = useState({});
  const ShadowX =50;
  const ShadowY = 50;
  const MaxScroll =document.documentElement.scrollHeight- window.innerHeight;
  let animationFrameId;
    var TitleContainer = document.getElementById('title')
    var CatchyContainer = document.getElementsByClassName('catchy')
  var AgentsContainer = document.getElementsByClassName('agents')
  var SkinAccessoire = document.getElementsByClassName('skin')
  var CrossPlatform = document.getElementsByClassName('cross')
  var Tag = document.getElementsByClassName('tag')
  var Ranks = document.getElementsByClassName('ranks')

  useEffect(() => {
  const updateFrame = () => {
    setFrameCount((prevFrameCount) => prevFrameCount + 1);
    var PourcentageScrollX =(((window.scrollY*100)/MaxScroll)/100)*ShadowX
    var PourcentageScrollY =(((window.scrollY*100)/MaxScroll)/100)*ShadowY
    changeShadow(PourcentageScrollX,PourcentageScrollY)
    chnageSoleil((((window.scrollY*100)/MaxScroll)/100))
    
    animationFrameId = requestAnimationFrame(updateFrame);
  };
  updateFrame();
  
  return () => {
    cancelAnimationFrame(animationFrameId);
  };
}, []);

const changeShadow = (X,Y) => {
  
  var t = X-ShadowX/2;
  if(Y >= ShadowY/2){
    var y = ShadowY-Y
  }else{
    var y = Y
  }
  //console.log(y)
  setShadow({
    boxShadow: `${t}px ${13+y}px ${7}px rgba(0,0,0,0.7)`,
    // Add any other style properties you want to change
  });
};

const chnageSoleil = (X) => {
  if(X >= 0.5){
    var t = 1-X
  }else{
    var t = X
  }

  
  var y = 1-(t*2)

  var j = y*0.6+0.2
 
  setSoleil({
    backgroundColor:`rgba(181, 89, 15, ${j})`,
  });
};
    
  

  return (
    <>
    <div className='Main'>
      <div className='BackgroundAbsolute'>
        
        </div>
        <div className='SousBackground' style={Soleil}></div>
      <div className='Container' id='title' style={divShadow}>
      <div className='TitleSousContainer' >
      <div className='ContainerLogo'>
      <div className='TitleLogo'>

        </div>
        </div>
        

        </div>
      </div>
      <div className='Container' id='catchy' style={divShadow}>
      <div className='CatchySousContainer' >
        <div className='TitleCatchy'>A new way to play 2D game</div>
        <div className=''></div>
      </div>
      </div>
      <div className='Container' id='agents' style={divShadow}>
      <div className='AgentsSousContainer'>
      <div className='MIDS'>A LOT OF MIDS AND SPELLS</div>
      
      </div>
      </div>
      <div className='Container' id='skin' style={divShadow}>
      <div className='SkinAccessoireSous'>
        LOOT AMAZING SKIN
      </div>
      </div>
      <div className='Container' id='cross' style={divShadow}>
      <div className='SousCrossPlatform' >
        <div className='PCandPhone'>
          <div className='PC'></div>
          <div className='Phone'></div>
        </div>
    </div>  
      </div>

      <div className='Container' id='tag' style={divShadow}>

      </div>
      <div className='Container' id='ranks' style={divShadow}></div>

      <div className='CatchPhrase'>

      </div>

      </div>
      
      
    </>
  )

  
}

export default App
