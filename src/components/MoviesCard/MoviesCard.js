import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard({ movieCard, onCardSaved, onCardDelete }) {

  const [isMoviesSeved, setMoviesSeved] = React.useState(false);
  const [isCardDelete, setCardDelete] = React.useState(false);
  
  function handleMoviesSeved() {
    if (!isMoviesSeved) {
      setMoviesSeved(true);
      onCardSaved(movieCard);
    } else {
      setMoviesSeved(false);
      onCardDelete(movieCard);
    }
    
  }

  function handleMoviesDelete() {
    onCardDelete(movieCard);
    setCardDelete(true);
  }

return (
  <li className={!isCardDelete ? `movies-card` : `movies-card__delete`} key={movieCard.id}>
    <div className="movies-card__header">
      <div className="movies-card__info">
        <h2 className="movies-card__title">{movieCard.title}</h2>
        <span className="movies-card__duration">{movieCard.duration}</span>
      </div>
      <Switch>
        <Route path="/movies">
          <button className={!isMoviesSeved ? `movies-card__button movies-card__button_type_save` : `movies-card__button movies-card__button_type_save-active`} onClick={handleMoviesSeved} type="button"></button>
        </Route>
        <Route path="/saved-movies">
        <button className="movies-card__button movies-card__button_type_delete" onClick={handleMoviesDelete} type="button"></button>
        </Route>
      </Switch>
    </div>
    <a className="movies-card__link" href="#">
      <img className="movies-card__cover" src={movieCard.image} alt="Обложка фильма" />
    </a>
  </li>
);
}

export default MoviesCard;