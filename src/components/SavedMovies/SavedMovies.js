import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import moviesFilter from '../../utils/MoviesFilter'; 

import './SavedMovies.css';

function SavedMovies({ cardsList, onCardDelete }) {
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isSearchDone, setIsSearchDone] = React.useState(false);

  const [query, setQuery] = React.useState('');
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);

  function handleSearch(query, checkboxStatus) {
    setQuery(query);
    setCheckboxStatus(checkboxStatus);
    const searchResult = moviesFilter(cardsList, query, checkboxStatus);
    setFilteredMovies(searchResult);
    setIsSearchDone(true);
  }

  React.useEffect(() => {
    if (filteredMovies.length > 0) {
      const searchResult = moviesFilter(cardsList, query, checkboxStatus);
      setFilteredMovies(searchResult);
    }
  }, [cardsList]);

  return (
    <main className="saved-movies">
      <SearchForm
        onSearchMovies={handleSearch}
      />
      {isSearchDone
      ? filteredMovies.length > 0
        ? <MoviesCardList
            movies={filteredMovies}
            onCardDelete={onCardDelete}
            isMoreButtonVisible={false}
          />
        : (
          <span className="saved-movies__nothing-found">
            Ничего не найдено
          </span>
        )
      : <MoviesCardList
          movies={cardsList}
          onCardDelete={onCardDelete}
        />
      }
    </main>
  )
}

export default SavedMovies;
