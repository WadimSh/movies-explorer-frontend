import React from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import api from '../../utils/MainApi';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import cardsList from '../../utils/cardsList';

import './App.css';

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMoviesUser, setSavedMoviesUser] =  React.useState([]);

  const [isRegisterSending, setRegisterSending] = React.useState(false);
  const [isRegisterStatus, setRegisterStatus] = React.useState({});

  const [isLoginSending, setLoginSending] = React.useState(false);
  const [isLoginStatus, setLoginStatus] = React.useState({});

  const [isProfileSending, setProfileSending] = React.useState(false);
  const [isProfileStatus, setProfileStatus] = React.useState({});

  const history = useHistory();
   
  const handleRegister = (name, email, password) => {
    setRegisterSending(true);
    api.register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch(err => {
        if (err.statusCode === 409) {
          setRegisterStatus({
            message: 'Пользователь с таким email уже существует'
          });
        } else {
          setRegisterStatus({
            message: 'При регистрации пользователя произошла ошибка'
          });
        }
      })
      .finally(() => {
        setRegisterSending(false);
      })
  }

  const handleLogin = (email, password) => {
    setLoginSending(true);
    api.authorization(email, password)
      .then(res => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch(err => {
        if (err.statusCode === 401) {
          setLoginStatus({
            message: 'Вы ввели неправильный логин или пароль'
          });
        } else if (err.statusCode === 400) {
          setLoginStatus({
            message: 'При авторизации произошла ошибка. Переданный токен некорректен'
          });
        } else {
          setLoginStatus({
            message: 'При авторизации произошла ошибка'
          });
        }
      })
      .finally(() => {
        setLoginSending(false);
      })
  }

  const handleProfileEdit = (user) => {
    setProfileStatus({});
    setProfileSending(true);
    api.patchUser(user)
      .then((newUser) => {
        setCurrentUser(newUser);
        setProfileStatus({
          message: 'Профиль обновлён.'
        });
      })
      .catch(err => {
        if (err.statusCode === 409) {
          setProfileStatus({
            message: 'Пользователь с таким email уже существует'
          });
        } else {
          setProfileStatus({
            message: 'При обновлении профиля произошла ошибка'
          });
        }
      })
      .finally(() => {
        setProfileSending(false);
      })
  }

  const handleCardSave = (movie) => {
   
    api.postMovies(movie)
      .then((newMovie) => {
        setSavedMoviesUser((movies) => [
          newMovie,
          ...movies
        ]);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleCardDelete = (movie) => {
    
    api.deleteMovies(movie)
      .then(() => {
        setSavedMoviesUser((movies) => movies.filter((m) => m._id !== movie._id));
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleSignOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('initialMovies');
    localStorage.removeItem('query');
    localStorage.removeItem('checkboxStatus');
    localStorage.removeItem('searchResults');
    history.push('/');
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if(jwt) {
      api.validityToken(jwt)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, []);
  
  React.useEffect(() => {
    if (isLoggedIn) {
      
      api.getUser()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch(err => {
          console.log(err)
        });
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      api.getMovies(jwt)
        .then((data) => {
          setSavedMoviesUser(data.filter((i) => i.owner === currentUser._id));
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [currentUser]);

  

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header 
          loggedIn={isLoggedIn}
        />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            loggedIn={isLoggedIn}
            cardsList={savedMoviesUser}
            onCardSaved={handleCardSave}
            onCardDelete={handleCardDelete}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={isLoggedIn}
            cardsList={savedMoviesUser}
            onCardDelete={handleCardDelete}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={isLoggedIn}
            onSignOut={handleSignOut}
            onProfileEdit={handleProfileEdit}
            isSending={isProfileSending}
            requestStatus={isProfileStatus}
          />
          <Route path="/signin">
            {isLoggedIn ? <Redirect to="/" /> :
              <Login
                onLogin={handleLogin}
                isSending={isLoginSending}
                requestStatus={isLoginStatus}
              />
            }
          </Route>
          <Route path="/signup">
            {isLoggedIn ? <Redirect to="/" /> :
              <Register
                onRegister={handleRegister}
                isSending={isRegisterSending}
                requestStatus={isRegisterStatus}
              />
            }
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
