import axios from 'axios';

export const fetchTvShows = (language,page) => async (dispatch) => {
    const api_key='592d5558fe91383c9979c4a7c357bfee'

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=${language}&page=${page}`);
    dispatch({
      type: 'FETCH_TV_SHOWS',
      payload: response.data.results,
    });
    console.log(response.data.results);
    
  } catch (error) {
    console.log(error);
    
  }
};
