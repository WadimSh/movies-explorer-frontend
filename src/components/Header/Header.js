import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

import Logo from '../../images/logo.svg';
import './Header.css';

function Header({ loggedIn }) {

  return (
    <Route exact path="/(|movies|saved-movies|profile)">
        <header className="header">
          <div className="header__wrap">
            <Link to="/">
              <img src={Logo} alt="Логотип сайта" />
            </Link>
            <Navigation loggedIn={loggedIn} />
          </div>
        </header>
      </Route>
 );
}

export default Header;
