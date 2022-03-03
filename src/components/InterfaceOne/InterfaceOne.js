import React from 'react';
import './InterfaceOne.css';
import Themes from '../../data/themes.json'
const InterfaceOne = () => {
  return (
    <>
      <header>
        <nav>
          <ul class="nav__links">
            {Themes.map(theme => {
              return(
              <li key={theme.id}>
                <a href="#">{theme.name}
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
