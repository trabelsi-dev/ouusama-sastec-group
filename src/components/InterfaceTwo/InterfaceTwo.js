import React from 'react';
import './InterfaceTwo.css'
import Videos from '../../data/videos.json'

const InterfaceTwo = () => {
  return (
    <>
      <div className="container">
      
      {Videos.map(video => {
        return(
          <img src={video.logo}  alt="video" className='img' />

        )
      })}
       

      </div>


    

    </>
  );
}

export default InterfaceTwo;
