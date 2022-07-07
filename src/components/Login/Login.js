import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo.svg';
import './Login.css';

function Login({ setLoggedIn }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(false);
  }

  return(
    <section className='login'>
      <form className="login__form" onSubmit={handleSubmit}>
      <div className="login__wrap">
          <Link to="/">
            <img src={Logo} alt="Логотип сайта" />
          </Link>
        </div>
      <h3 className="login__title">Рады видеть!</h3>
      <label className='login__label'>E-mail</label>
      <input className="login__input" placeholder="Email" type="email" onChange={handleEmailChange} value={email} autoComplete="off" required />
      <label className='login__label'>Пароль</label>
      <input className="login__input" placeholder="Пароль" type="password" onChange={handlePasswordChange} value={password} autoComplete="off" required />
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