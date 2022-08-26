import React from 'react';

import Photo from '../../images/about-me.jpg';
import './AboutMe.css';

function AboutMe(props) {
  const ref = React.useRef();
  const titleRef = React.useRef();
  const nameRef = React.useRef();
  const profileRef = React.useRef();
  const descriptionRef = React.useRef();
  
  const [start, setStart] = React.useState(0);
  const [title, setTitle] = React.useState(0);
  const [name, setName] = React.useState(0);
  const [profile, setProfile] = React.useState(0);
  const [description, setDescription] = React.useState(0);
  
  const handleScroll = () => {
    const score = ref.current.getBoundingClientRect();
    const scoreTitle = titleRef.current.getBoundingClientRect();
    const scoreName = nameRef.current.getBoundingClientRect();
    const scoreProfile = profileRef.current.getBoundingClientRect();
    const scoreDescription = descriptionRef.current.getBoundingClientRect();
    setStart(score.top);
    setTitle(scoreTitle.top);
    setName(scoreName.top);
    setProfile(scoreProfile.top);
    setDescription(scoreDescription.top);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const conteiner = {
    transform: `matrix(1, 0, 0, 1, 0, ${0 + (start / 10)})`,
    opacity: (1 - (start / 1000))
  }

  return (
    <section className="about-me" id="about-me" ref={ref}>
      <h2 ref={titleRef} className={`about-me__title ${((props.onHeight / 1.2) <= title) ? "" : "about-me__title-active"}`}>Разработчик</h2>
      <div className="about-me__wrap">
        <div className="about-me__info">
          <h1 ref={nameRef} className={`about-me__name ${((props.onHeight / 1.2) <= name) ? "" : "about-me__name-active"}`}>Вадим</h1>
          <p ref={profileRef} className={`about-me__profile ${((props.onHeight / 1.2) <= profile) ? "" : "about-me__profile-active"}`}>Фронтенд-разработчик, 44 года</p>
          <p ref={descriptionRef} className={`about-me__description ${((props.onHeight / 1.5) <= description) ? "" : "about-me__description-active"}`}>Живу в&nbsp;Зеленограде. В&nbsp;настоящее время работаю веб-разработчиком в&nbsp;компании, торгующей товарами для праздников. В&nbsp;планах разработка платформы для развития и&nbsp;продвижения наукоемких проектов.</p>
          <ul className="about-me__links-list">
            <li>
              <a className="about-me__links-item" href="https://www.facebook.com" target="_blank">Facebook</a>
            </li>
            <li>
              <a className="about-me__links-item" href="https://github.com/WadimSh" target="_blank">Github</a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" style={conteiner} src={Photo} alt="Фотография студента" />
      </div>
    </section>
  )
}

export default AboutMe;
