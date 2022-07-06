import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './MoviesCard.css';


function MoviesCard({ movieCard }) {

  const [isMoviesSeved, setMoviesSeved] = React.useState(false);

  function handleMoviesSeved(movieCard) {
    setMoviesSeved(!isMoviesSeved);
  }

  function handleMoviesDelete() {
    
  }

return (
  <li className="movies-card" key={movieCard.id}>
    <div className="movies-card__header">
      <div className="movies-card__info">
        <h2 className="movies-card__title">{movieCard.title}</h2>
        <span className="movies-card__duration">{movieCard.duration}</span>
      </div>
      <Switch>
        <Route path="/movies">
          <button className={isMoviesSeved ? `movies-card__button_type_save` : `movies-card__button_type_save-active`} onClick={handleMoviesSeved} type="button"></button>
        </Route>
      </Switch>
    </div>
    <a className="movies-card__link" href="#">
      <Switch>
        <Route path="/movies">
          <img className="movies-card__cover" src={movieCard.image} alt="Обложка фильма" />
        </Route>
      </Switch>
    </a>
  </li>
);
}

export default MoviesCard;