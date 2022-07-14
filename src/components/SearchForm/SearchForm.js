import React from 'react';

import './SearchForm.css';

function SearchForm({ onSearchMovies }) {
  const [query, setQuery] = React.useState('');
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);
  
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
            onClick={handleCheckboxChange}
          >
            <input
              defaultChecked={checkboxStatus}
              className="filter-checkbox__invisible-checkbox"
              type="checkbox"
            />
            <span className="filter-checkbox__pseudo-checkbox"></span>
            <span className="filter-checkbox-label-text">Короткометражки</span>
          </label>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;
