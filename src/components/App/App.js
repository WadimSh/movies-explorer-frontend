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

  const history = useHistory();
  

  
  const handleRegister = (name, email, password) => {
    
    api.register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleLogin = (email, password) => {

    api.authorization(email, password)
      .then(res => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleSignOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    history.push('/');
  }
  
  React.useEffect(() => {
    if (isLoggedIn) {
      const jwt = localStorage.getItem('jwt');
      api.getUser()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch(err => {
          console.log(err)
        });
    }
  }, [isLoggedIn]);

  //***
  const saveCardsList = [];
  //функция сохранения карточки фильма
  const handleSeveMovies = (movieCard) => {
    const seach = saveCardsList.includes(movieCard)
    if (!seach) {
      movieCard.check = true;
      saveCardsList.push(movieCard);
    }
  }
  //функция удаления карточки фильма
  const handleDeleteMovies = (movieCard) => {
    const seach = saveCardsList.includes(movieCard)
    if (seach) {
      movieCard.check = false;
      const del = saveCardsList.indexOf(movieCard);
      saveCardsList.splice(del, 1);
    }
  }

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
            cardsList={cardsList}
            onCardSaved={handleSeveMovies}
            onCardDelete={handleDeleteMovies}
            onMoreButton={true}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={isLoggedIn}
            cardsList={saveCardsList}
            onCardSaved={handleSeveMovies}
            onCardDelete={handleDeleteMovies}
            onMoreButton={false}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={isLoggedIn}
            onSignOut={handleSignOut}
          />
          <Route path="/signin">
            {isLoggedIn ? <Redirect to="/" /> :
              <Login
                onLogin={handleLogin}
              />
            }
          </Route>
          <Route path="/signup">
            {isLoggedIn ? <Redirect to="/" /> :
              <Register
                onRegister={handleRegister}
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
