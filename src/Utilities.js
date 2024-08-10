import axios from 'axios';

const apiKey = '592d5558fe91383c9979c4a7c357bfee';
const url = 'https://api.themoviedb.org/3';

const AllMovies = axios.create({
  baseURL: url,
  params: {
    api_key: apiKey,
  },
});

export const searchMovies = (query, language, page = 1) => {
  const url2 = `${url}/search/movie?api_key=${apiKey}&query=${query}&language=${language}&page=${page}`;
  return axios.get(url2)
    .then(response => response)
    .catch(error => console.error('Error searching movies:', error));
};

export const getMovies = (category, page = 1, language) =>
  AllMovies.get(`/movie/${category}`, { params: {  language,page } });

export const getMovieDetails = (id, language) =>
  AllMovies.get(`/movie/${id}`, { params: { language } });

export const getTVShows = (language, page = 1) =>
  AllMovies.get(`/tv/popular`, { params: { page, language } });

export const getPeople = (language, page = 1) =>
  AllMovies.get(`/person/popular`, { params: { page, language } });

export default AllMovies;
