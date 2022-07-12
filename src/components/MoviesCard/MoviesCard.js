import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MOVIES } from '../../utils/constants';
import durationConvert from '../../utils/durationConvert';

import './MoviesCard.css';

function MoviesCard({
  movie,
  cardsList,
  onCardSaved,
  onCardDelete 
}) {
  const isSaved = movie.id && cardsList.some((m) => m.movieId === movie.id);

  const handleMoviesSeved = () => {
    if (isSaved) {
      onCardDelete(cardsList.filter((m) => m.movieId === movie.id)[0]);
    } else if (!isSaved) {
      onCardSaved(movie);
    }
  }
  
  const handleMoviesDelete = () => {
    onCardDelete(movie);
  }

  return (
    <li className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__info">
          <h3 className="movies-card__title">{movie.nameRU}</h3>
          <span className="movies-card__duration">{durationConvert(movie.duration)}</span>
        </div>
        <Switch>
          <Route path="/movies">
            <button className={!isSaved ? `movies-card__button movies-card__button_type_save` : `movies-card__button movies-card__button_type_save-active`} onClick={handleMoviesSeved} type="button"></button>
          </Route>
          <Route path="/saved-movies">
            <button className="movies-card__button movies-card__button_type_delete" onClick={handleMoviesDelete} type="button"></button>
          </Route>
        </Switch>
      </div>
      <a className="movies-card__link" href={movie.trailerLink} target="_blank">
        <img className="movies-card__cover" src={`${MOVIES}${movie.image.url}`} alt="Обложка фильма" />
      </a>
    </li>
  )
}

export default MoviesCard;
