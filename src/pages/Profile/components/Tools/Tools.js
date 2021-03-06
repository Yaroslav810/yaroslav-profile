import React, { useState } from 'react';
import './Tools.css';

import htmlImage from '../../../../assets/images/html.png';
import reactImage from '../../../../assets/images/react.png';
import jsImage from '../../../../assets/images/js.png';
import phpImage from '../../../../assets/images/php.png';

function Tools() {
  const [activeTools, setActiveTools] = useState('php');

  return(
      <div className="tools">
        <h4 className="tools__title">
          Какие инструменты я использую?
        </h4>
        <div className="tools__content">
          {
            activeTools === 'php' && (
                <p className="tools__text">
                  Гибкий и удобный в использовании. 80% сайтов с посещаемостью свыше 10 млн. пользователей используют PHP.
                </p>
            )
          }
          {
            activeTools === 'js' && (
                <p className="tools__text">
                  Самый популярный и востребованный язык программирования. Примерно 95% сайтов в Интернете так
                  или иначе прибегают к его использованию.
                </p>
            )
          }
          {
            activeTools === 'react' && (
                <p className="tools__text">
                  Детище великого и могущего Facebook. Самая популярная библиотека JavaScript для разработки
                  пользовательского интерфейса (UI).
                </p>
            )
          }
          <ul className="tools__interactive list">
            <li className="interactive interactive_1" onClick={ () => setActiveTools('php') }  >
              <div>
                <img src={ phpImage } alt="php"/>
              </div>
            </li>
            <li className="interactive interactive_2">
              <div>
                <img src={ jsImage } alt="js" onClick={ () => setActiveTools('js') }  />
              </div>
            </li>
            <li className="interactive interactive_3">
              <div>
                <img src={ reactImage } alt="html" onClick={ () => setActiveTools('react') }  />
              </div>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default Tools;
