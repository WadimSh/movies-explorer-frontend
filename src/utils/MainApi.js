import { USERS_URL, MOVIES_URL } from './constants';

class MainApi {
    constructor({ baseUrl }) {
      this.url = baseUrl;
      
    }
  
    get _headers() {
      return {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
      }
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка ${res.status}`);
      }
    }

    register = (name, email, password) => {
        return fetch(`${BASE_URL}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name, email, password})
        })
        .then(this._checkResponse)
    }

    authorization = (email, password) => {
        return fetch(`${BASE_URL}/signin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email, password})
        })
        .then(this._checkResponse)
    }
  
    getUser() {
      return fetch(`${this.url}/users/me`, {
        headers: this._headers,
      }).then(this._checkResponse);
    }

    patchUser(user) {
      return fetch(`${this.url}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
            name: user.name,
            email: user.email
        }),
      }).then(this._checkResponse);
    }
  
    getMovies() {
        return fetch(`${this.url}/movies`, {
          headers: this._headers,
        }).then(this._checkResponse);
    }
    
    postMovies(movie) {
      return fetch(`${this.url}/movies`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: `${MOVIES_URL}${movie.image.url}`,
            trailerLink: movie.trailerLink,
            thumbnail: `${MOVIES_URL}${movie.image.formats.thumbnail.url}`,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
        }),
      }).then(this._checkResponse);
    }

    deleteMovies(movie) {
      return fetch(`${this.url}/cards/${movie._id}`, {
        method: "DELETE",
        headers: this._headers,
      }).then(this._checkResponse);
    }
}
  
const api = new MainApi({
    baseUrl: `${USERS_URL}`,
  });
  
export default api;