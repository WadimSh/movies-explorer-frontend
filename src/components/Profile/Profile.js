import React from 'react';
import { useHistory } from 'react-router-dom';

import './Profile.css';

function Profile({ onSignOut }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const history = useHistory();
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    history.goBack();
  }

  return (
    <section className="profile">
      <form className="profile-form" onSubmit={handleSubmit}>
        <h1 className="profile-form__title">Привет, Вадим!</h1>
          <label className="profile-form__label">
          <span className="profile-form__label-text">Имя</span>
            <input id="name-input" type="text" name="name" placeholder="Имя" className="profile-form__input" onChange={handleNameChange} value={name} autoComplete="off" minLength="2" maxLength="30" required/>
          </label>
        <label className="profile-form__label">
          <span className="profile-form__label-text">E-mail</span>
          <input id="email-input" type="text" name="email" placeholder="E-mail" className="profile-form__input" onChange={handleEmailChange} value={email} autoComplete="off" required/>
        </label>
        <button className="profile-form__submit" type="submit">Редактировать</button>
        <button className="profile__logout" type="button" onClick={onSignOut}>Выйти из аккаунта</button>
      </form>
    </section>
  )
}

export default Profile;
