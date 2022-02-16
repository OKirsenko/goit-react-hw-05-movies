import { Switch, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
import HomePage from './HomePage/HomePage';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './MoviesPage/MoviesPage';
import NotFoundPage from './NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <>
      <AppBar />
      <Container>
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
      </Container>
    </>
  );
};
