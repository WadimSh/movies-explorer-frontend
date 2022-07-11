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

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import cardsList from '../../utils/cardsList';

import './App.css';

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const history = useHistory();
  const saveCardsList = [];
  
  //функция выхода из аккауна
  const handleSignOut = () => {
    setLoggedIn(false);
    history.push('/');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
  }

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
                setLoggedIn={setLoggedIn}
              />
            }
          </Route>
          <Route path="/signup">
            {isLoggedIn ? <Redirect to="/" /> :
              <Register
                setLoggedIn={setLoggedIn}
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
