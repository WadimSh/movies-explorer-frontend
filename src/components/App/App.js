import React from 'react';
import { Route, Switch } from 'react-router-dom';

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

  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const saveCardsList = [];

  function handleSeveMovies(movieCard) {
    const seve = saveCardsList.includes(movieCard)
    if (!seve) {
        saveCardsList.push(movieCard);
      }
    }
  

  function handleDeleteMovies(movieCard) {
    const seve = saveCardsList.includes(movieCard)
    if (seve) {
        saveCardsList.splice(movieCard.id - 1, 1);
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
          <Profile />
        </Route>
          
        <Route path="/signin">
          <Login />
        </Route>
          
        <Route path="/signup">
          <Register />
        </Route>
          
        <Route path="*">
          <PageNotFound />
        </Route>
        
        </Switch>
        
      <Footer />
    </div>
  );
}

export default App;
