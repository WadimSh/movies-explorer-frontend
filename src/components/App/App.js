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

  const handleProfileEdit = (user) => {
    
    api.patchUser(user)
      .then((newUser) => {
        setCurrentUser(newUser);
        
      })
      .catch((err) => {
        console.log(err);
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
