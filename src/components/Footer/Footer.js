import React from 'react';
import { Route } from 'react-router-dom';

import './Footer.css';

function Footer() {

  return (
    <Route path="/(|movies|saved-movies)">
      <footer className="footer">
        <p className="footer__caption">Учебный проект Яндекс.Практикум × BeatFilm.</p>
        <div className="footer__wrap">
          <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
          <ul className="footer__links-list">
            <li>
              <a className="footer__links-item" href="https://praktikum.yandex.ru" target="_blank">Яндекс.Практикум</a>
            </li>
            <li>
              <a className="footer__links-item" href="https://github.com/wadimsh" target="_blank">Github</a>
            </li>
          </ul>
        </div>
      </footer>
    </Route>
  )
}

export default Footer;
