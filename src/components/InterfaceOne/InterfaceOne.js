import React , {useEffect} from 'react';
import './InterfaceOne.css';
//import Themes from '../../data/themes.json'
import { getTheme } from '../../actions/theme.action';

import { useDispatch, useSelector } from "react-redux";

const InterfaceOne = () => {

  const dispatch = useDispatch()

  useEffect (() => {
    dispatch(getTheme())
  
  },[dispatch])

  const data = useSelector((state) => state.themeReducer);
  //const { duration,logo, description } = data
  console.log("theme", data);



  return (
    <>
      <header>
        <nav>
          <ul className="nav__links">


            {data.map((theme,index) => {
              return(
              <li key={index}>
                <a href="/">{theme.name}
                </a>
              </li>
              )

            })}

          </ul>
        </nav>

      </header>


    </>
  );
}

export default InterfaceOne;
