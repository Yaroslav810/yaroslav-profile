import React from 'react';
import './NotFound.css';

import notFoundImg from '../../assets/images/not-found.png';

function NotFound() {
  return (
      <div className="not-found">
        <p className="not-found__text">Страница не найдена &#128532;</p>
        <p className="not-found__link">
          <a href="/" className="link">Вернуться на главную</a>
        </p>
      </div>
  );
}

export default NotFound;
