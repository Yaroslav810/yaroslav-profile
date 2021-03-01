import React from 'react';
import './Header.css';

function Header() {
  return (
      <div className="header">
        <div className="header__content">
          <div className="header__logo">

          </div>
          <ul className="header__menu menu">
            <li><a className="menu__item" href="#">Главная</a></li>
            <li><a className="menu__item" href="#">Прокты</a></li>
            <li><a className="menu__item" href="#">Обо всём</a></li>
            <li><a className="menu__item" href="#">Контакты</a></li>
          </ul>
        </div>
      </div>
  );
}

export default Header;
