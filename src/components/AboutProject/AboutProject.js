import React from 'react';

import './AboutProject.css';

function AboutProject(props) {
 
  return (
    <section className="about-project" id="about-project">
      <h2 className={`about-project__title ${props.onScroll < 300 ? "" : "about-project__title-active"}`}>О проекте</h2>
      <div className="about-project__features">
        <article className="about-project__feature">
          <h3 className={`about-project__subtitle ${props.onScroll < 400 ? "" : "about-project__subtitle-active"}`}>Дипломный проект включал 5 этапов</h3>
          <p className={`about-project__paragraph ${props.onScroll < 500 ? "" : "about-project__paragraph-active"}`}>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
        </article>
        <article className="about-project__feature">
          <h3 className={`about-project__subtitle ${props.onScroll < 400 ? "" : "about-project__subtitle-active"}`}>На выполнение диплома ушло 3 недели</h3>
          <p className={`about-project__paragraph ${props.onScroll < 500 ? "" : "about-project__paragraph-active"}`}>У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <div className="about-project__timeline">
        <div className="about-project__bar-wrap">
          <div className={`about-project__bar about-project__bar_backend ${props.onScroll < 500 ? "" : "about-project__bar_backend-active"}`}>1 неделя</div>
          <div className={`about-project__bar about-project__bar_frontend ${props.onScroll < 500 ? "" : "about-project__bar about-project__bar_frontend-active"}`}>2 недели</div>
        </div>
        <div className="about-project__caption-wrap">
          <div className="about-project__caption about-project__caption_backend">Back-end</div>
          <div className="about-project__caption about-project__caption_frontend">Front-end</div>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
