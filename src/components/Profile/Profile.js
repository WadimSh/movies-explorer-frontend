import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/formValidation';

import './Profile.css';

function Profile({ onSignOut, onProfileEdit, isSending, requestStatus: { message } }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, resetFrom, isValid } = useFormWithValidation();
  const [requestStatusText, setRequestStatusText] = React.useState('');
  
  const isDisabled = !isValid || isSending;

  const handleSubmit = (e) => {
    e.preventDefault();
    onProfileEdit(values);
    setRequestStatusText(message);
  }

  React.useEffect(() => {
    if (currentUser) {
      resetFrom(currentUser, {}, false);
    }
  }, [currentUser, resetFrom]);

  return (
    <section className="profile">
      <form name="profile" className="profile__form" onSubmit={handleSubmit}>
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <label className="profile__label" >
          <span className="profile__label-text">Имя</span>
            <input id="name-input" type="text" name="name" placeholder="Укажите Ваше имя" className="profile__input" onChange={handleChange} value={values.name || ''} autoComplete="off" minLength="3" maxLength="30" required/>
          </label>
        <label className="profile__label" >
          <span className="profile__label-text">E-mail</span>
          <input id="email-input" type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Укажите новый e-mail" className="profile__input" onChange={handleChange} value={values.email || ''} autoComplete="off" required/>
        </label>
        <span className="profile__feedback">{requestStatusText || ''}</span>
        <button disabled={isDisabled} className="profile__button" type="submit">Редактировать</button>
        <button className="profile__button-out" type="button" onClick={onSignOut}>Выйти из аккаунта</button>
      </form>
    </section>
  )
}

export default Profile;
