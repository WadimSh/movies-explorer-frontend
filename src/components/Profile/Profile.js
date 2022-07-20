import React from 'react';
import { useLocation } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Profile.css';

function Profile({ onSignOut, onProfileEdit, requestStatus: { message } }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [previousName, setPreviousName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);
  const [previousEmail, setPreviousEmail] = React.useState(currentUser.email);
  const [requestStatusText, setRequestStatusText] = React.useState('');
  const [isDisabled, setDisabled] = React.useState(false);
  const { pathname } = useLocation();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    onProfileEdit({ name, email });
    setDisabled(false);
  }

  const handleUserName = (e) => {
    setRequestStatusText('');
    const value = e.target.value;
    const err = e.target.validationMessage;
    setName(value);
    if (value !== previousName && !err) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    
  }

  const handleUserEmail = (e) => {
    setRequestStatusText('');
    const value = e.target.value;
    const err = e.target.validationMessage;
    setEmail(value);
    if (value !== previousEmail && !err) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }

  React.useEffect(() => {
    setRequestStatusText(message);
  }, [message]);

  React.useEffect(() => {
    setRequestStatusText('');
  }, [pathname]);

  React.useEffect(() =>{
    const localStorageName = localStorage.getItem('name');
    if (localStorageName) {
      setPreviousName(localStorageName);
    }
    const localStorageEmail = localStorage.getItem('email');
    if (localStorageEmail) {
      setPreviousEmail(localStorageEmail);
    }
  }, [handleSubmit]);

  return (
    <section className="profile">
      <form name="profile" className="profile__form" onSubmit={handleSubmit}>
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <label className="profile__label" >
          <span className="profile__label-text">Имя</span>
            <input type="text" name="name" placeholder="Укажите Ваше имя" className="profile__input" onChange={handleUserName} value={name || ''} autoComplete="off" minLength="3" maxLength="30" required/>
          </label>
        <label className="profile__label" >
          <span className="profile__label-text">E-mail</span>
          <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Укажите новый e-mail" className="profile__input" onChange={handleUserEmail} value={email || ''} autoComplete="off" required/>
        </label>
        <span className="profile__feedback">{requestStatusText || ''}</span>
        <button disabled={!isDisabled} className="profile__button" type="submit">Редактировать</button>
        <button className="profile__button-out" type="button" onClick={onSignOut}>Выйти из аккаунта</button>
      </form>
    </section>
  )
}

export default Profile;
