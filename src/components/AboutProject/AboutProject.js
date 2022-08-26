import React from 'react';

import './AboutProject.css';

function AboutProject(props) {
  const titleRef = React.useRef();
  const subtitOneRef = React.useRef();
  const subtitTwoRef = React.useRef();
  const paragraphOneRef = React.useRef();
  const paragraphTwoRef = React.useRef();

  const [title, setTitle] = React.useState(0);
  const [subtitOne, setSubtitOne] = React.useState(0);
  const [subtitTwo, setSubtitTwo] = React.useState(0);
  const [paragraphOne, setParagraphOne] = React.useState(0);
  const [paragraphTwo, setParagraphTwo] = React.useState(0);

  const handleScroll = () => {
    const scoreTitle = titleRef.current.getBoundingClientRect();
    const scoreSubtitOne = subtitOneRef.current.getBoundingClientRect();
    const scoreSubtitTwo = subtitTwoRef.current.getBoundingClientRect();
    const scoreParagraphOne = paragraphOneRef.current.getBoundingClientRect();
    const scoreParagraphTwo = paragraphTwoRef.current.getBoundingClientRect();
    setTitle(scoreTitle.top);
    setSubtitOne(scoreSubtitOne.top);
    setSubtitTwo(scoreSubtitTwo.top);
    setParagraphOne(scoreParagraphOne.top);
    setParagraphTwo(scoreParagraphTwo.top);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <section className="about-project" id="about-project" >
      <h2 ref={titleRef} className={`about-project__title ${((props.onHeight / 1.2) <= title) ? "" : "about-project__title-active"}`}>О проекте</h2>
      <div className="about-project__features" >
        <article className="about-project__feature">
          <h3 ref={subtitOneRef} className={`about-project__subtitle ${((props.onHeight / 1.2) <= subtitOne) ? "" : "about-project__subtitle-active"}`}>Проект включал 5 этапов</h3>
          <p ref={paragraphOneRef} className={`about-project__paragraph ${((props.onHeight / 1.2) <= paragraphOne) ? "" : "about-project__paragraph-active"}`}>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
        </article>
        <article className="about-project__feature">
          <h3 ref={subtitTwoRef} className={`about-project__subtitle ${((props.onHeight / 1.2) <= subtitTwo) ? "" : "about-project__subtitle-active"}`}>На выполнение проекта ушло 3 недели</h3>
          <p ref={paragraphTwoRef} className={`about-project__paragraph ${((props.onHeight / 1.2) <= paragraphTwo) ? "" : "about-project__paragraph-active"}`}>У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
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
