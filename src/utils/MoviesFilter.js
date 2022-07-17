import { SHORT_FILM } from './constants';

function moviesFilter(movies, query, checkboxStatus) {
    let moviesFilter = movies;
    let result;
  
    if (checkboxStatus) {
      moviesFilter = moviesFilter.filter((movie) => movie.duration <= SHORT_FILM);
    }
  
    result = moviesFilter.filter((movie) => {
      return movie.nameRU.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
    return result;
  }
  
  export default moviesFilter;