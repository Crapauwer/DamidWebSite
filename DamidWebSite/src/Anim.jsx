import React from 'react'
import { useLottie } from "lottie-react";
import lanima from './assets/data.json'


const Anim = () => {
    const options = {
      animationData: lanima,
      loop: false,
      style: {
        width: '100%', 
        height: '100%'
      }
    };
  
    const { View } = useLottie(options);
    return <>{View}</>;
    return  (
          <div style={{
            display: 'flex',
            position: 'relative',
            width: '10%',
            height: '10%',
            maxWidth: '500px', // Ajustez selon vos besoins
            maxHeight: '500px', // Ajustez selon vos besoins
            border: '1px solid rgba(255, 255, 255, 0.5)',
          }}>
            <Lottie 
        animationData={lanima} 
        loop={true}
        style={{ width: '100%', height: '100%' }}
      />
          </div>
      );
  };
export default Anim;