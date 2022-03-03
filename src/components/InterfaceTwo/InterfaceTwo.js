import React from 'react';
import './InterfaceTwo.css'
import Videos from '../../data/videos.json'

const InterfaceTwo = () => {
  return (
    <>
      <div className="container">

        {Videos.map(video => {
          return (


            <div className='Rectangle'>

              <img src={video.logo} alt="video" className='img' />
          
                <div className='time'>{video.duration}</div>
                <div className='footerVideo description' >{video.description}</div>

            </div>


          )
        })}


      </div>




    </>
  );
}

export default InterfaceTwo;
