import React from 'react';
import { useLocation } from 'react-router-dom';

import './SearchForm.css';

function SearchForm({ onSearchMovies }) {
  
  const [query, setQuery] = React.useState('');
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);
  let location = useLocation();
  
  React.useEffect(() => {
    const value = localStorage.getItem('checkboxStatus');
      if (location.pathname === '/movies') {
        if (localStorage.getItem('query')) {
          setQuery(localStorage.getItem('query'));
        } 
        if (JSON.parse(value) === true) {
          setCheckboxStatus(true);
        } else {
          setCheckboxStatus(false);
        }
      }  
    }, [location.pathname])
  
  const handleQueryChange = (e) => {
    const input = document.getElementById('queryInput');
    input.setCustomValidity('');
    setQuery(e.target.value);
        
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchMovies(query, checkboxStatus);
   
  }

  const handleChange = (checkboxStatus) => {
    setCheckboxStatus(checkboxStatus);
    onSearchMovies(query, checkboxStatus);
  }

  const handleCheckboxChange = (e) => {
    handleChange(e.target.checked);
  }

  React.useEffect(() => {
    if (!query) {
      const input = document.getElementById('queryInput');
      input.setCustomValidity('Нужно ввести ключевое слово');
    }
  }, [query])

  return (
    <section className="search-form" >
      <form className="search-form__form" onSubmit={handleSubmit}>
        <div className="search-form__input-wrap">
          <div className="search-from__icon"></div>
          <input
            id="queryInput"
            value={query || ''}
            onChange={handleQueryChange}
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            autoComplete="off"
            required
          />
          <button className="search-form__button" type="submit" ></button>
        </div>
        <div className="search-form__filter" >
          <label
            className="filter-checkbox"
          >
            <input
              onChange={handleCheckboxChange}
              className="filter-checkbox__invisible-checkbox"
              type="checkbox"
            />
            <span className={!checkboxStatus ? "filter-checkbox__pseudo-checkbox" : "filter-checkbox__pseudo-checkboxon"}></span>
            <span className="filter-checkbox-label-text">Короткометражки</span>
          </label>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;
