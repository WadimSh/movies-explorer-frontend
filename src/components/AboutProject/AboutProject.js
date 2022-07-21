import React from 'react';

import './AboutProject.css';


function AboutProject(props) {
  
  const container1 = {
        backgroundColor: '#2BE080',
        flexGrow: (props.onScroll > 450 ? props.onScroll < 500  ? `${((props.onScroll.toFixed() - 450) / 100)}` : "1" : "0"),
        transition: '.8s'
      }

  const container2 = {
        backgroundColor: '#F2F2F2',
        flexGrow: (props.onScroll > 400 ? props.onScroll < 550  ? `${((props.onScroll.toFixed() - 400) / 100)}` : "7" : "0"),
        transition: '.8s'
      }
 
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
          <div className="about-project__bar" style={container1}>1 неделя</div>
          <div className="about-project__bar" style={container2}>2 недели</div>
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
