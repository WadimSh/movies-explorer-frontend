import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import moviesApi from '../../utils/MoviesApi';
import moviesFilter from '../../utils/MoviesFilter'; 

import './Movies.css';

function Movies({ savedMoviesByCurrentUser, onCardSaved, onCardDelete }) {
  const [moviesToRender, setMoviesToRender] = React.useState([]);
  const [query, setQuery] = React.useState('');
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);
  const [initialMovies, setInitialMovies] = React.useState([]);
  const [isSearchMovies, setSearchMovies] = React.useState(false);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isSearchDone, setIsSearchDone] = React.useState(false);
  const [isMoreButtonVisible, setIsMoreButtonVisible] = React.useState(false);
  const [firstResultsNumber, setFirstResultsNumber] = React.useState(0);
  const [moreResultsNumber, setMoreResultsNumber] = React.useState(0);
  const currentViewport = document.documentElement.clientWidth;


  const handleSearch = (query, checkboxStatus) => {
    setMoviesToRender([]);
    setQuery(query);
    setCheckboxStatus(checkboxStatus);

    const initialMoviesInLocalStorage = JSON.parse(localStorage.getItem('initialMovies'));

    if (!initialMoviesInLocalStorage) {
      setSearchMovies(true);
      moviesApi.getMovies()
        .then((data) => {
          setInitialMovies(data);
          localStorage.setItem('initialMovies', JSON.stringify(data));
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setSearchMovies(false);
        })
    } else {
      setInitialMovies(initialMoviesInLocalStorage);
    }
  }

  React.useEffect(() => {
    if (initialMovies.length > 0) {
      const searchResults = moviesFilter(initialMovies, query, checkboxStatus);
      setFilteredMovies(searchResults);
      setIsSearchDone(true);
      console.log(searchResults);
    }
    
  }, [initialMovies, query, checkboxStatus]);

  React.useEffect(() => {
    if (currentViewport <= 480) {
      setFirstResultsNumber(5);
      setMoreResultsNumber(2);
    } else if (currentViewport <= 768) {
      setFirstResultsNumber(8);
      setMoreResultsNumber(2);
    } else if (currentViewport > 768) {
      setFirstResultsNumber(12);
      setMoreResultsNumber(3);
    }
  }, [currentViewport]);

  React.useEffect(() => {
    if (filteredMovies.length > 0) {
      if (filteredMovies.length > firstResultsNumber) {
        setMoviesToRender(filteredMovies.slice(0, firstResultsNumber));
        setIsMoreButtonVisible(true);
      } else {
        setMoviesToRender(filteredMovies);
      }
    }
  }, [filteredMovies, firstResultsNumber]);

  function handleMoreButtonClick() {
    setMoviesToRender((state) => filteredMovies.slice(0, state.length + moreResultsNumber));
  }

  React.useEffect(() => {
    if (moviesToRender.length === filteredMovies.length) {
      setIsMoreButtonVisible(false);
    }
  }, [moviesToRender, filteredMovies]);

  return (
    <main className="movies">
      <SearchForm
        onSearchMovies={handleSearch}
      />
      {isSearchMovies 
        ? <Preloader /> 
        : isSearchDone
          ? moviesToRender.length > 0
            ? <MoviesCardList 
                movies={moviesToRender}
                savedMoviesByCurrentUser={savedMoviesByCurrentUser}
                onCardSaved={onCardSaved}
                onCardDelete={onCardDelete}
                isMoreButtonVisible={isMoreButtonVisible}
                onMoreButtonClick={handleMoreButtonClick}
              />
            : (
              <span className="movies__nothing-found">
                Ничего не найдено
              </span>
            )
          : ("")
      }
    </main>
  )
}

export default Movies;
