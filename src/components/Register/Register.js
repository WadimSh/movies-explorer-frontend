import React from 'react';
import { Link } from 'react-router-dom';

import { useFormWithValidation } from '../../utils/formValidation';

import Logo from '../../images/logo.svg';
import './Register.css';

function Register({ onRegister, isSending, requestStatus: { message } }) {
  const { values, handleChange, resetFrom, errors, isValid } = useFormWithValidation();
  const isDisabled = !isValid || !isSending;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  }

  React.useEffect(() => {
    resetFrom({}, {}, false);
  }, [resetFrom]);

  return (
    <section className="register">
      <form name="register" className="register__form" onSubmit={handleSubmit} action="#">
        <div className="register__wrap">
          <Link to="/">
            <img src={Logo} alt="Логотип сайта" />
          </Link>
        </div>
        <h2 className="register__title">Добро пожаловать!</h2>
        <label className="register__label">Имя</label>
        <input id="name-input" className="register__input" placeholder="Укажите Ваше имя" type="text" name="name" onChange={handleChange} value={values.name || ''} autoComplete="off" minLength="2" maxLength="40" required />
        <span className="register__error">{errors.name || ''}</span>
        <label className="register__label">E-mail</label>
        <input id="email-input" className="register__input" placeholder="Укажите Ваш e-mail" type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={handleChange} value={values.email || ''} autoComplete="off" required />
        <span className="register__error">{errors.email || ''}</span>
        <label className="register__label">Пароль</label>
        <input id="password-input" className="register__input" placeholder="Введите пароль" type="password" name="password" onChange={handleChange} value={values.password || ''} autoComplete="off" required />
        <span className="register__error">{errors.password || ''}</span>
        <span className="register__feedback">{message}</span>
        <button disabled={isDisabled} className="register__button" type="submit">Зарегистрироваться</button>
        <p className="register__caption">
          Уже зарегистрированы? 
          <Link to="/signin" className="register__link"> Войти</Link>
        </p>
      </form>
    </section>
  )
}

export default Register;
