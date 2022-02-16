import axios from 'axios';
// const key = '72b81a8bb303f29cc8e049d7d5cd52a0';
const baseURL = 'https://api.themoviedb.org/3/';

// const setParams = () => {
//   axios.defaults.params = {
//     key: '72b81a8bb303f29cc8e049d7d5cd52a0',
//   };
// };
// export default function moviesApi() {
//   return axios
//     .get(`${baseURL}?api_key=72b81a8bb303f29cc8e049d7d5cd52a0`)
//     .then(console.log);
// }
//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=batman&page=1&include_adult=false
