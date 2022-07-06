import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList({ cardsList, saveCardsList, onCardSaved, onCardDelete }) {
  
  return (
     <section className="movies-card-lis-container">
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
      <button className="movies-card-list__more-button" type="button">Ещё</button>
    </section>
  )
}

export default MoviesCardList;
