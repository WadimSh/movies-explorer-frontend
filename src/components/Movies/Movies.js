import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import './Movies.css';

function Movies({ cardsList, onCardSaved, onCardDelete, onMoreButton }) {
  const [isSearchMovies, setSearchMovies] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {setSearchMovies(false)}, 2000);
  }, [isSearchMovies]);

  return (
    <main className="movies">
      <SearchForm
        onTimeout={setSearchMovies}
      />
      {isSearchMovies ? <Preloader /> :
        <MoviesCardList 
          cardsList={cardsList}
          onCardSaved={onCardSaved}
          onCardDelete={onCardDelete}
          onMoreButton={onMoreButton}
        />}
    </main>
  );
}

export default Movies;
