import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';

import cardsList from '../../utils/cardsList';

import './App.css';

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(true);
  const history = useHistory();
  const saveCardsList = [];
  
  //функция выхода из аккауна
  const handleSignOut = () => {
    setLoggedIn(true);
    history.push('/');
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
    <div className="page">
      <Header 
        loggedIn={isLoggedIn}
      />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies 
            cardsList={cardsList}
            onCardSaved={handleSeveMovies}
            onCardDelete={handleDeleteMovies}
            onMoreButton={true}
          />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies
            cardsList={saveCardsList}
            onCardSaved={handleSeveMovies}
            onCardDelete={handleDeleteMovies}
            onMoreButton={false}
          />
        </Route>
        <Route path="/profile">
          <Profile
            onSignOut={handleSignOut}
          />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register
            setLoggedIn={setLoggedIn}
          />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
