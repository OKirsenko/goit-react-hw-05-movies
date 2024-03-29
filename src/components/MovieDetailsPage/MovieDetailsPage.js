import {
  NavLink,
  Route,
  useParams,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import s from './MovieDetailsPage.module.css';
import fetchAPI from 'services/fetchTrending';
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    fetchAPI('movie', movieId)
      .then(res => res.data)
      .then(setMovie);
  }, [movieId]);

  const imgUrl = () => {
    if (!movie.poster_path) {
      return 'http://placehold.it/300x400/808080&text=No_poster';
    }
    return `https://image.tmdb.org/t/p/w400${movie.poster_path}`;
  };
  return (
    <div className={s.container}>
      <button className={s.btn} onClick={history.goBack}>
        Go back
      </button>
      {movie && (
        <div>
          <div className={s.wrapper}>
            <img
              className={s.img}
              src={imgUrl()}
              alt={movie.title ? movie.title : movie.name}
            />
            <div className={s.right}>
              <h1 className={s.header}>
                {movie.title ? movie.title : movie.name} (
                {movie.release_date.slice(0, 4)})
              </h1>
              <p className={s.descr}>Popularity: {movie.popularity}</p>
              <h2 className={s.header}>Overview</h2>
              <p className={s.descr}>{movie.overview}</p>
              <h2 className={s.header}>Genres</h2>
              <p className={s.descr}>
                {movie.genres.map(genre => `${genre.name} `)}
              </p>
            </div>
          </div>
          <h2 className={s.header}>Auditional information</h2>
          <ul className={s.list}>
            <li>
              <NavLink
                activeClassName={s.activeLink}
                className={s.link}
                to={`${url}/cast`}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={s.activeLink}
                className={s.link}
                to={`${url}/reviews`}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      <Suspense fallback={<h1>loading...</h1>}>
        <Route path="/movies/:movieId/cast">
          <Cast />
        </Route>
        <Route path="/movies/:movieId/reviews">
          <Reviews />
        </Route>
      </Suspense>
    </div>
  );
}
