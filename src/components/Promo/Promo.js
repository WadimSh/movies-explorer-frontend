import React from 'react';

import './Promo.css';

function Promo(props) {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className={`promo__title ${scroll < 300 ? "promo__title-active" : ""}`}>Учебный проект студента факультета Веб-разработки.</h1>
        {props.children}
      </div>
    </section>
  )
}

export default Promo;
