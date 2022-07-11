import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Logo from '../../images/logo.svg';
import './Login.css';

function Login({ setLoggedIn }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/');
    setLoggedIn(true);
  }

  return(
    <section className="login">
      <form className="login__form" onSubmit={handleSubmit}>
       <div className="login__wrap">
          <Link to="/">
            <img src={Logo} alt="Логотип" />
          </Link>
        </div>
        <h2 className="login__title">Рады видеть!</h2>
        <label className="login__label">E-mail</label>
        <input className="login__input" placeholder="Укажите e-mail" type="email" onChange={handleEmailChange} value={email} autoComplete="off" required />
        <span className="login__error"> </span>
        <label className='login__label'>Пароль</label>
        <input className="login__input" placeholder="Введите пароль" type="password" onChange={handlePasswordChange} value={password} autoComplete="off" required />
        <span className="login__error"> </span>
        <button className="login__button" type="submit">Войти</button>
        <p className="login__caption">
          Ещё не зарегистрированы? 
          <Link to="/signup" className="login__link"> Регистрация</Link>
        </p>
      </form>
    </section>
  )
}

export default Login;
