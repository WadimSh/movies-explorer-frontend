import React from 'react';
import { Link } from 'react-router-dom';

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
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="form__title">Рады видеть!</h3>
      <input className="form__input" placeholder="Email" type="email" onChange={handleEmailChange} value={email} required />
      <input className="form__input" placeholder="Пароль" type="password" onChange={handlePasswordChange} value={password} required />
      <button className="form__button" type="submit">Войти</button>
      <p className="form__caption">
        Ещё не зарегистрированы? 
        <Link to="/signup" className="form__link"> Регистрация</Link>
      </p>
    </form>
  )
}

export default Login;