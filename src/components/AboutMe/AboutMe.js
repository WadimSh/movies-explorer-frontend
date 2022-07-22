import React from 'react';

import Photo from '../../images/about-me.jpg';
import './AboutMe.css';

function AboutMe(props) {

  return (
    <section className="about-me" id="about-me">
      <h2 className={`about-me__title ${props.onScroll < 1400 ? "" : "about-me__title-active"}`}>Студент</h2>
      <div className="about-me__wrap">
        <div className="about-me__info">
          <h3 className={`about-me__name ${props.onScroll < 1500 ? "" : "about-me__name-active"}`}>Вадим</h3>
          <p className={`about-me__profile ${props.onScroll < 1600 ? "" : "about-me__profile-active"}`}>Фронтенд-разработчик, 43 года</p>
          <p className={`about-me__description ${props.onScroll < 1700 ? "" : "about-me__description-active"}`}>Я&nbsp;живу в&nbsp;Москве, закончил факультет АСУ ВМИРЭ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку. Недавно решил освоить профессию веб-разработчика. Пока есть идеи как применить новые знания на&nbsp;текущей работе, а&nbsp;будущем возможно полностью перейду в&nbsp;программисты.</p>
          <ul className="about-me__links-list">
            <li>
              <a className="about-me__links-item" href="https://www.facebook.com" target="_blank">Facebook</a>
            </li>
            <li>
              <a className="about-me__links-item" href="https://github.com/WadimSh" target="_blank">Github</a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" src={Photo} alt="Фотография студента" />
      </div>
    </section>
  )
}

export default AboutMe;
