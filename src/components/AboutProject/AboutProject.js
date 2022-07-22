import React from 'react';

import './AboutProject.css';

function AboutProject(props) {
  const ref = React.useRef();
  const subtitleRef = React.useRef();

  const [fit, setFit] = React.useState(0);
  const [git, setGit] = React.useState(0);
  

  React.useEffect(() => {
    const rect = ref.current.getBoundingClientRect();
    setFit(rect.top);
    const subtitle = subtitleRef.current.getBoundingClientRect();
    setGit(subtitle.top)
  })
  

  
  
  return (
    <section className="about-project" id="about-project" >
      <h2 ref={ref} className={`about-project__title ${((props.onHeight / 2) <= fit) ? "" : "about-project__title-active"}`}>О проекте</h2>
      <div className="about-project__features" >
        <article className="about-project__feature">
          <h3 ref={subtitleRef} className={`about-project__subtitle ${((props.onHeight / 2) <= git) ? "" : "about-project__subtitle-active"}`}>Дипломный проект включал 5 этапов</h3>
          <p className={`about-project__paragraph ${((props.onHeight / 2) <= fit) ? "" : "about-project__paragraph-active"}`}>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
        </article>
        <article className="about-project__feature">
          <h3 className={`about-project__subtitle ${((props.onHeight / 2) <= fit) ? "" : "about-project__subtitle-active"}`}>На выполнение диплома ушло 3 недели</h3>
          <p className={`about-project__paragraph ${((props.onHeight / 2) <= fit) ? "" : "about-project__paragraph-active"}`}>У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <div className="about-project__timeline">
        <div className="about-project__bar-wrap">
          <div className="about-project__bar about-project__bar_backend">1 неделя</div>
          <div className="about-project__bar about-project__bar_frontend">2 недели</div>
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
