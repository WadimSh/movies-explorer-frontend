import { MOVIES_URL } from './constants';

class MoviesApi {
    constructor({ baseUrl }) {
      this.url = baseUrl;
    }

    _checkResponse = (res) => {
        if(res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getMovies() {
        return fetch(`${this.url}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(res => this._checkResponse(res));
        }
    }
    
    const moviesApi = new MoviesApi({
        baseUrl: `${MOVIES_URL}`,
    });
    
    export default moviesApi;
