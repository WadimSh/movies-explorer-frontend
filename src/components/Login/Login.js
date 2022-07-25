import React from 'react';
import { Link } from 'react-router-dom';

import { useFormWithValidation } from '../../utils/formValidation';

import Logo from '../../images/logo.svg';
import './Login.css';

function Login({ onLogin, isSending, requestStatus: { message } }) {
  const { values, handleChange, resetFrom, errors, isValid } = useFormWithValidation();
  const isDisabled = !isValid || !isSending;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  }

  React.useEffect(() => {
    resetFrom({}, {}, false);
  }, [resetFrom]);

  return(
    <section className="login">
      <form name="login" className="login__form" onSubmit={handleSubmit}>
       <div className="login__wrap">
          <Link to="/">
            <img src={Logo} alt="Логотип" />
          </Link>
        </div>
        <h2 className="login__title">Рады видеть!</h2>
        <label className="login__label">E-mail</label>
        <input id="email-input" className="login__input" placeholder="Укажите e-mail" type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={handleChange} value={values.email || ''} autoComplete="off" required />
        <span className="login__error">{errors.email || ''}</span>
        <label className='login__label'>Пароль</label>
        <input className="login__input" placeholder="Введите пароль" type="password" name="password" onChange={handleChange} value={values.password || ''} autoComplete="off" required />
        <span className="login__error">{errors.password || ''}</span>
        <span className="login__feedback">{message || ''}</span>
        <button disabled={isDisabled} className="login__button" type="submit">Войти</button>
        <p className="login__caption">
          Ещё не зарегистрированы? 
          <Link to="/signup" className="login__link"> Регистрация</Link>
        </p>
      </form>
    </section>
  )
}

export default Login;
