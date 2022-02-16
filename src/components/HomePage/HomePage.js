import { useState, useEffect } from 'react';
import s from './HomePage.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState(null);
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=72b81a8bb303f29cc8e049d7d5cd52a0'
      )
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
