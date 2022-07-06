import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css';

function SavedMovies({ cardsList, onCardSaved, onCardDelete }) {
  return (
    <main className="saved-movies">
    <SearchForm />
    <MoviesCardList
    cardsList={cardsList}
    onCardSaved={onCardSaved}
    onCardDelete={onCardDelete}
    />
    </main>
  );
}

export default SavedMovies;