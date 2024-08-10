
const initialState = {
  tvShows: []
};

const tvShowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TV_SHOWS':
      return {
        ...state,
        tvShows:action.payload,
        loading: false,
      };
   
    default:
      return state;
  }
};

export default tvShowsReducer;
