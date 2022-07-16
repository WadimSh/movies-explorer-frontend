import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import moviesApi from '../../utils/MoviesApi';
import moviesFilter from '../../utils/MoviesFilter';

import './Movies.css';

function Movies({ cardsList, onCardSaved, onCardDelete }) {
  //переменная в которой записан текст запроса из поисковой стороки
  const [query, setQuery] = React.useState('');
  //массив с отображаемым колличеством карточек
  const [moviesToRender, setMoviesToRender] = React.useState([]);
  //массив с исходным колличеством фильмов
  const [initialMovies, setInitialMovies] = React.useState([]);
  //массив с результатами поиска
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  //логическая переменная для определения состояния загрузки массива фильма, т.е. когда подключать спинер
  const [isSearchMovies, setSearchMovies] = React.useState(false);
  const [searchStatus, setSearchStatus] = React.useState('');
  //логическая переменная состояния чекбокса - фильтра короткометражек
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);
  //логическая переменная состояния на старте, т.е. до поиска
  const [isSearchDone, setIsSearchDone] = React.useState(false);
  //логическая переменная отображения кнопки ещё
  const [isMoreButtonVisible, setIsMoreButtonVisible] = React.useState(false);
  //переменные для отображения колличества карточек в зависимости от расширения экрана
  //колличество первого паказа карточек
  const [firstResultsNumber, setFirstResultsNumber] = React.useState(0);
  //колличество последующего показа карточек
  const [moreResultsNumber, setMoreResultsNumber] = React.useState(0);
  //переменная в которую записана текущая ширина экрана
  const currentViewport = document.documentElement.clientWidth;

  React.useEffect(() => {
    if (localStorage.getItem('searchResults')) {
      const init = JSON.parse(localStorage.getItem('searchResults'));
      const searchResult = moviesFilter(init, query, checkboxStatus);
      setFilteredMovies(searchResult);
      setIsSearchDone(true);
    }
  }, [])

  //основная функция передаваемая для запуска в форму поиска
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
        .catch(() => {
            setSearchStatus('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.')
        })
        .finally(() => {
          setSearchMovies(false);
        })
    } else {
      setInitialMovies(initialMoviesInLocalStorage);
    }
  }
  //эффект который осуществляет поиск и фильтрацию из исходного массива
  React.useEffect(() => {
    if (initialMovies.length > 0) {
      const searchResults = moviesFilter(initialMovies, query, checkboxStatus);
      setFilteredMovies(searchResults);
      setIsSearchDone(true);
      localStorage.setItem('query', query);
      localStorage.setItem('checkboxStatus', checkboxStatus);
      localStorage.setItem('searchResults', JSON.stringify(searchResults));
    }
  }, [initialMovies, query, checkboxStatus]);
  //эффект определения отображения карточек взависимости от ширены экрана
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
  //эффект выбора колличества карточек показа
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
  //функция работы кнопки ещё
  function handleMoreButtonClick() {
    setMoviesToRender((state) => filteredMovies.slice(0, state.length + moreResultsNumber));
    
  }
  //проверка видемости кнопки ещё
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
                cardsList={cardsList}
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
          : (isSearchMovies ? <span className="movies__nothing-found">searchStatus</span> : "")
      }
    </main>
  )
}

export default Movies;
