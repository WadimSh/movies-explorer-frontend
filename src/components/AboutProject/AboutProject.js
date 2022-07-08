import React from 'react';

import './AboutProject.css';

function AboutProject() {

  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__features">
        <article className="about-project__feature">
          <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
        </article>
        <article className="about-project__feature">
          <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__paragraph">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <div className="about-project__timeline">
        <div className="about-project__bar-wrap">
          <div className="about-project__bar about-project__bar_backend">1 неделя</div>
          <div className="about-project__bar about-project__bar_frontend">4 недели</div>
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
