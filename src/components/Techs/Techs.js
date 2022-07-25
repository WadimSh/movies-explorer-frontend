import React from 'react';

import './Techs.css';

function Techs(props) {
  const titleRef = React.useRef();
  const subtitRef = React.useRef();
  const paragraphRef = React.useRef();
  
  const [title, setTitle] = React.useState(0);
  const [subtit, setSubtitOne] = React.useState(0);
  const [paragraph, setParagraphOne] = React.useState(0);
  
  const handleScroll = () => {
    const scoreTitle = titleRef.current.getBoundingClientRect();
    const scoreSubtit = subtitRef.current.getBoundingClientRect();
    const scoreParagraph = paragraphRef.current.getBoundingClientRect();
    setTitle(scoreTitle.top);
    setSubtitOne(scoreSubtit.top);
    setParagraphOne(scoreParagraph.top);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <section className="techs" id="techs">
      <div className="techs__container">
        <h2 ref={titleRef} className={`techs__title ${((props.onHeight / 1.2) <= title) ? "" : "techs__title-active"}`}>Технологии</h2>
        <h3 ref={subtitRef} className={`techs__subtitle ${((props.onHeight / 1.2) <= subtit) ? "" : "techs__subtitle-active"}`}>7 технологий</h3>
        <p ref={paragraphRef} className={`techs__paragraph ${((props.onHeight / 1.2) <= paragraph) ? "" : "techs__paragraph-active"}`}>На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
        <ul className="techs__list">
          <li className="techs__list-item">HTML</li>
          <li className="techs__list-item">CSS</li>
          <li className="techs__list-item">JS</li>
          <li className="techs__list-item">React</li>
          <li className="techs__list-item">Git</li>
          <li className="techs__list-item">Express.js</li>
          <li className="techs__list-item">mongoDB</li>
        </ul>
      </div>
    </section>
  )
}

export default Techs;
