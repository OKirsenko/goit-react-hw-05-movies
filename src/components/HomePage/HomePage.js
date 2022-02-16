import { useState, useEffect } from 'react';
import s from './HomePage.module.css';
import { Link } from 'react-router-dom';
import fetchAPI from 'services/fetchTrending';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState(null);
  useEffect(() => {
    fetchAPI('trending')
      .then(res => res.data.results)
      .then(setTrendMovies);
  }, []);

  return (
    <div className={s.container}>
      <h1 className={s.header}>Trending today</h1>
      <ul className={s.list}>
        {trendMovies &&
          trendMovies.map(movie => {
            return (
              <li key={movie.id} className={s.item}>
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

/// https://api.themoviedb.org/3/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg
