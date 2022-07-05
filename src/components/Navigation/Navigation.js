import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation({ loggedIn }) {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function handleMenuOpen() {
    setIsMenuOpen(true);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  return (
    <nav className='navigation'>
      {loggedIn ? (
          <>
            <Link className='navigation__user-register' to="/signup"> Регистрация </Link>
            <Link className='navigation__user-login' to="/signin"> Войти </Link>
          </>
        ) : (
          <div className='navigation__destop-menu'>
            <NavLink className='navigation__site-link' activeClassName="navigation__site-link_active" to="/movies"> Фильмы </NavLink>
            <NavLink className='navigation__site-link' activeClassName="navigation__site-link_active" to="/saved-movies"> Сохранённые фильмы </NavLink>
            <Link className='navigation__user-profile' to="/profile"> Аккаунт </Link>
            <button className='navigation__button' onClick={handleMenuOpen} type="button"></button>
          </div>
        )
      }

      <div className={`navigation__mobile-menu mobile-menu ${isMenuOpen ? "mobile-menu_is-open" : ""}`}>
        <div className="mobile-menu__links">
          <button className="mobile-menu__close" onClick={handleMenuClose} type="button"></button>
          <NavLink className="mobile-menu__site-link" activeClassName="mobile-menu__site-link_active" exact to="/" onClick={handleMenuClose}>Главная</NavLink>
          <NavLink className="mobile-menu__site-link" activeClassName="mobile-menu__site-link_active" to="/movies" onClick={handleMenuClose}>Фильмы</NavLink>
          <NavLink className="mobile-menu__site-link" activeClassName="mobile-menu__site-link_active" to="/saved-movies" onClick={handleMenuClose}>Сохранённые фильмы</NavLink>
          <Link className="mobile-menu__user-profile" to="/profile" onClick={handleMenuClose}>Аккаунт</Link>
        </div>
      </div>

    </nav>
    
  );
}

export default Navigation;