import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList({
  movies,
  cardsList,
  onCardSaved,
  onCardDelete,
  isMoreButtonVisible,
  onMoreButtonClick
}) {
  
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
        {movies.map((movie) => (
          <MoviesCard
            key={movie.id || movie.movieId}
            movie={movie}
            cardsList={cardsList}
            onCardSaved={onCardSaved}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>
      <div className="movies-card-list__box">
        <button
          onClick={onMoreButtonClick}
          className={isMoreButtonVisible ? `movies-card-list__more-button` : `movies-card-list__more-button movies-card-list__more-button_unactive`}
          type="button"
        >Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList;
