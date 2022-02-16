import axios from 'axios';
const key = '72b81a8bb303f29cc8e049d7d5cd52a0';
export default function fetchAPI(action, param) {
  if (action === 'trending') {
    return axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`
    );
  }
  if (action === 'movie') {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${param}?api_key=${key}`
    );
  }
  if (action === 'search') {
    return axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${param}`
    );
  }
  if (action === 'cast') {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${param}/credits?api_key=${key}&language=en-US`
    );
  }
  if (action === 'review') {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${param}/reviews?api_key=${key}&language=en-US`
    );
  }
}
