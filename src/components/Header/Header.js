import React, {useState} from 'react'
import './Header.css'

function Header() {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo">
                    <a href="/" className="logo__link link">YaroslavProduction</a>
                </div>
                <div className="header__menu">
                    <ul className="menu list">
                        <li className="menu__item"><a href="/" className="menu__link link">Главная</a></li>
                        <li className="menu__item"><a href="/projects" className="menu__link link">Проекты</a></li>
                        <li className="menu__item"><a href="/backstage" className="menu__link link">Backstage</a></li>
                        <li className="menu__item"><a href="/contacts" className="menu__link link">Контакты</a></li>
                    </ul>
                </div>
                <div className={ 'menu_mobile__icon ' + (menuActive ? 'menu_mobile__icon_active' : '') } onClick={ () => setMenuActive(!menuActive) }>
                    <div className="menu_mobile__icon-line" />
                </div>
            </div>
            <div className={ 'header__menu_mobile ' + (menuActive ? 'menu_mobile_active' : '') }>
                {
                    <ul className={ 'menu_mobile list ' }>
                        <li className="menu_mobile__item"><a href="/" className="menu__link link">Главная</a></li>
                        <li className="menu_mobile__item"><a href="/projects" className="menu__link link">Проекты</a></li>
                        <li className="menu_mobile__item"><a href="/backstage" className="menu__link link">Backstage</a></li>
                        <li className="menu_mobile__item"><a href="/contacts" className="menu__link link">Контакты</a></li>
                    </ul>
                }
            </div>
        </header>
    )
}

export default Header
