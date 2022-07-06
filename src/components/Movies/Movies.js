import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './Movies.css';

function Movies({ cardsList, onCardSaved, onCardDelete }) {
  console.log(cardsList);
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList 
        cardsList={cardsList}
        onCardSaved={onCardSaved}
        onCardDelete={onCardDelete}
      />
    </main>
  );
}

export default Movies;