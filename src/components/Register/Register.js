import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo.svg';
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
    <section className='register'>
      <form className="register__form" onSubmit={handleSubmit}>
      <div className="register__wrap">
          <Link to="/">
            <img src={Logo} alt="Логотип сайта" />
          </Link>
        </div>
      <h3 className="register__title">Добро пожаловать!</h3>
      <label className='register__label'>Имя</label>
      <input className="register__input" placeholder="Name" type="text" onChange={handleNameChange} value={name} autoComplete="off" minLength="2" maxLength="40" required />
      <label className='register__label'>E-mail</label>
      <input className="register__input" placeholder="Email" type="email" onChange={handleEmailChange} value={email} autoComplete="off" required />
      <label className='register__label'>Пароль</label>
      <input className="register__input" placeholder="Password" type="password" onChange={handlePasswordChange} value={password} autoComplete="off" required />
      <button className="register__button" type="submit">Зарегистрироваться</button>
      <p className="register__caption">
      Уже зарегистрированы? 
        <Link to="/signin" className="register__link"> Войти</Link>
      </p>
    </form>
    </section>
    
  )
}

export default Register;