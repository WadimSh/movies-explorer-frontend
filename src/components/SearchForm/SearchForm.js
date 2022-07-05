import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <div className="search-form__input-wrap">
          <input value='' className="search-form__input" type="text" name="query" placeholder="Фильм" required />
          <button className="search-form__submit" type="submit" ></button>
        </div>
        <div className="search-form__filter">
          <label className="filter-checkbox" >
            <input className="filter-checkbox__invisible-checkbox" type="checkbox" />
            <span className="filter-checkbox__pseudo-checkbox"></span>
            <span className="filter-checkbox-label-text">Короткометражки</span>
          </label>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;