import React from 'react';

import './Portfolio.css';

function Portfolio() {

  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__links-list">
          <li className="portfolio__links-item">
            <a className="portfolio__link" href="https://github.com/wadimsh/putishestvie" target="_blank">Статичный сайт
              <p className="portfolio__link-icon">↗</p>
            </a>
          </li>
          <li className="portfolio__links-item">
            <a className="portfolio__link" href="https://github.com/wadimsh/mesto-1" target="_blank">Адаптивный сайт
              <p className="portfolio__link-icon">↗</p>
            </a>
          </li>
          <li className="portfolio__links-item">
            <a className="portfolio__link" href="https://github.com/wadimsh/react-mesto-api-full" target="_blank">Одностраничное приложение
              <p className="portfolio__link-icon">↗</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio;
