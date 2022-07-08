import React from 'react';

import Photo from '../../images/about-me.jpg';
import './AboutMe.css';

function AboutMe() {

  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__wrap">
        <div className="about-me__info">
          <h3 className="about-me__name">Вадим</h3>
          <p className="about-me__profile">Фронтенд-разработчик, 43 года</p>
          <p className="about-me__description">Я&nbsp;живу в&nbsp;Москве, закончил факультет АСУ ВМИРЭ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку. Недавно решил освоить профессию веб-разработчика. Пока есть идеи как применить новые знания на&nbsp;текущей работе, а&nbsp;будущем возможно полностью перейду в&nbsp;программисты.</p>
          <ul className="about-me__links-list">
            <li>
              <a className="about-me__links-item" href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a className="about-me__links-item" href="https://github.com/WadimSh">Github</a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" src={Photo} alt="Фотография студента" />
      </div>
    </section>
  );
}

export default AboutMe;
