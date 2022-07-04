import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <Switch>
      <Route exact path="/(|movies|saved-movies)">
    <header className="header">
      <h1>Header</h1>
      <Link to="/"> О проекте </Link>
      <Link to="/movies"> Фильмы </Link>
      <Link to="/saved-movies"> Сохранённые фильмы </Link>
      <Link to="/signup"> Регистрация </Link>
      <Link to="/signin"> Авторизация </Link>
      <Link to="/profile"> Аккаунт </Link>
    </header>
    </Route>
  <Route path="/(|signup|signin|profile)">
    <h1>Header</h1>
    <Link to="/"> О проекте </Link>
  </Route>
    </Switch>
  
  );
}

export default Header;
