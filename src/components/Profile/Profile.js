import React from 'react';
import { useHistory } from 'react-router-dom';

import './Profile.css';

function Profile({ onSignOut }) {
  const currentUser = localStorage.getItem('name');
  const [name, setName] = React.useState(localStorage.getItem('name'));
  const [email, setEmail] = React.useState(localStorage.getItem('email'));
  const history = useHistory();
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    history.goBack();
  }

  return (
    <section className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <h2 className="profile__title">Привет, {currentUser}!</h2>
          <label className="profile__label">
          <span className="profile__label-text">Имя</span>
            <input id="name-input" type="text" name="name" placeholder="Укажите Ваше имя" className="profile__input" onChange={handleNameChange} value={name} autoComplete="off" minLength="2" maxLength="30" required/>
          </label>
        <label className="profile__label">
          <span className="profile__label-text">E-mail</span>
          <input id="email-input" type="text" name="email" placeholder="Укажите новый e-mail" className="profile__input" onChange={handleEmailChange} value={email} autoComplete="off" required/>
        </label>
        <button className="profile__button" type="submit">Редактировать</button>
        <button className="profile__button-out" type="button" onClick={onSignOut}>Выйти из аккаунта</button>
      </form>
    </section>
  )
}

export default Profile;
