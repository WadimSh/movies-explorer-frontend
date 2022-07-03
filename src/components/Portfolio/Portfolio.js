import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
        <div className="portfolio__container">
            <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links-list">
        <li className="portfolio__links-item">
          <a className="portfolio__link" href="https://github.com/wadimsh">Статичный сайт</a>
          <p className="portfolio__link-icon">↗</p>
        </li>
        <li className="portfolio__links-item">
          <a className="portfolio__link" href="https://github.com/wadimsh">Адаптивный сайт</a>
          <p className="portfolio__link-icon">↗</p>
        </li>
        <li className="portfolio__links-item">
          <a className="portfolio__link" href="https://github.com/wadimsh">Одностраничное приложение</a>
          <p className="portfolio__link-icon">↗</p>
          </li>
      </ul>
        </div>
      
    </section>
  );
}

export default Portfolio;