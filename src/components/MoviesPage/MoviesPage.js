import s from './MoviesPage.module.css';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import fetchAPI from 'services/fetchTrending';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState(null);

  const movieName = new URLSearchParams(location.search).get('query');

  const handleSearchChange = event => {
    setSearchMovie(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchMovie.trim() === '') {
      alert('No matches');
      return;
    }

    history.push({ ...location, search: `query=${searchMovie}` });

    setSearchMovie('');
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }
    fetchAPI('search', movieName)
      .then(res => res.data.results)
      .then(setMovies);
  }, [movieName]);

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="searchMovie"
          value={searchMovie}
          onChange={handleSearchChange}
        />
        <button type="submit" className={s.formButton}>
          Search
        </button>
      </form>
      <ul className={s.list}>
        {movies &&
          movies.map(movie => {
            return (
              <li className={s.item} key={movie.id}>
                <Link className={s.item} to={`/movies/${movie.id}`}>
                  {movie.title ? movie.title : movie.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
