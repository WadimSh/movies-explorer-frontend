import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList({ cardsList, onCardSaved, onCardDelete, onMoreButton }) {
  
  return (
     <section className="movies-card-list-container">
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
      <div className='movies-card-list__box'>
        <button className={onMoreButton ? `movies-card-list__more-button` : `movies-card-list__more-button movies-card-list__more-button_unactive`} type="button">Ещё</button>
      </div>
            
    </section>
  )
}

export default MoviesCardList;
