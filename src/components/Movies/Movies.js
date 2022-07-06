import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './Movies.css';

function Movies({ cardsList, onCardSaved, onCardDelete, onMoreButton }) {
  
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList 
        cardsList={cardsList}
        onCardSaved={onCardSaved}
        onCardDelete={onCardDelete}
        onMoreButton={onMoreButton}
      />
    </main>
  );
}

export default Movies;