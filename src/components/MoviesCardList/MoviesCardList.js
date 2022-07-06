import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import cardsList from '../../utils/cardsList';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
     <div className="movies-card-lis-container">
      <ul className="movies-card-list">
      {cardsList.map((movieCard) => (
        <MoviesCard
        key={movieCard.id}
        movieCard={movieCard}
        />
      ))}
      </ul>
    </div>
  )
}

export default MoviesCardList;
