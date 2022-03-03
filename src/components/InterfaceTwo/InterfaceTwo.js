import React , {useEffect} from 'react';
import './InterfaceTwo.css'
//import Videos from '../../data/videos.json'
import { getVideo } from '../../actions/video.action';

import { useDispatch, useSelector } from "react-redux";


const InterfaceTwo = () => {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.videoReducer);
  //const { duration,logo, description } = data

useEffect (() => {
  dispatch(getVideo())

},[dispatch])
  
  console.log("video ",data);

  return (
    <>
    <div className="container">

    {
      data.map(res => {
        return (
            <div className='Rectangle'>
              <img src={res.logo} alt="video" className='img' />         
                <div className='time'>{res.duration}</div>
                <div className='footerVideo description' >{res.description}</div>
            </div>
          )    
    })}
      
    </div>

    </>
  );
}

export default InterfaceTwo;
