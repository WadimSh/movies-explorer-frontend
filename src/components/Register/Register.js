import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo.svg';
import './Register.css';

function Register({ onRegister, isSending, requestStatus }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(name, email, password);
  }

  return (
    <section className="register">
      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__wrap">
          <Link to="/">
            <img src={Logo} alt="Логотип сайта" />
          </Link>
        </div>
        <h2 className="register__title">Добро пожаловать!</h2>
        <label className="register__label">Имя</label>
        <input className="register__input" placeholder="Укажите Ваше имя" type="text" onChange={handleNameChange} value={name} autoComplete="off" minLength="2" maxLength="40" required />
        <span className="register__error"> </span>
        <label className="register__label">E-mail</label>
        <input className="register__input" placeholder="Укажите Ваш e-mail" type="email" onChange={handleEmailChange} value={email} autoComplete="off" required />
        <span className="register__error"> </span>
        <label className="register__label">Пароль</label>
        <input className="register__input" placeholder="Введите пароль" type="password" onChange={handlePasswordChange} value={password} autoComplete="off" required />
        <span className="register__error"></span>
        <span className="register__feedback"></span>
        <button disabled={isSending} className="register__button" type="submit">Зарегистрироваться</button>
        <p className="register__caption">
          Уже зарегистрированы? 
          <Link to="/signin" className="register__link"> Войти</Link>
        </p>
      </form>
    </section>
  )
}

export default Register;
