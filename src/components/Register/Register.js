import React from 'react';
import { Link } from 'react-router-dom';

import './Register.css';

function Register() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleNameChange(evt) {
    setName(evt.target.value);
  }
  
  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="form__title">Добро пожаловать!</h3>
      <input className="form__input" placeholder="Name" type="text" onChange={handleNameChange} value={name} autoComplete="off" minLength="2" maxLength="40" required />
      <input className="form__input" placeholder="Email" type="email" onChange={handleEmailChange} value={email} autoComplete="off" required />
      <input className="form__input" placeholder="Password" type="password" onChange={handlePasswordChange} value={password} autoComplete="off" required />
      <button className="form__button" type="submit">Зарегистрироваться</button>
      <p className="form__caption">
      Уже зарегистрированы? 
        <Link to="/signin" className="form__link"> Войти</Link>
      </p>
    </form>
  )
}

export default Register;