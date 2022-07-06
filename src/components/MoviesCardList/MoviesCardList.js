import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList({ cardsList, saveCardsList, onCardSaved, onCardDelete }) {
  
  return (
     <div className="movies-card-lis-container">
      <ul className="movies-card-list">
            {cardsList.map((movieCard) => (
              <MoviesCard
                key={movieCard.id}
                movieCard={movieCard}
                onCardSaved={onCardSaved}
                onCardDelete={onCardDelete}
              />
            ))}
               
      </ul>
    </div>
  )
}

export default MoviesCardList;
