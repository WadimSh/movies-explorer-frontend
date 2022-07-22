import React from 'react';

import './Techs.css';

function Techs(props) {
  const ref = React.useRef();
  React.useEffect(() => {
    const rect = ref.current.getBoundingClientRect();
  })

  return (
    <section className="techs" id="techs" ref={ref}>
      <div className="techs__container">
        <h2 className={`techs__title ${props.onScroll < ((props.onHeight / 2) + 50) ? "" : "techs__title-active"}`}>Технологии</h2>
        <h3 className={`techs__subtitle ${props.onScroll < ((props.onHeight / 2) + 100) ? "" : "techs__subtitle-active"}`}>7 технологий</h3>
        <p className={`techs__paragraph ${props.onScroll < ((props.onHeight / 2) + 150) ? "" : "techs__paragraph-active"}`}>На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
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
