import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
const HomePage = lazy(() => import('./HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<h1>loading...</h1>}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/movies">
              <MoviesPage />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
};
