import { configureStore } from '@reduxjs/toolkit';
import language from './Slice/language';
import combineReducers from './reducer/combinReducer'
import FavoriteReducer from './reducer/favorite';
import tvShowsReducer from './reducer/tvShowsReducer';

const store = configureStore({
  reducer: {
    combined: combineReducers,
    language: language,
    favorites:FavoriteReducer,
    tvShows:tvShowsReducer
  },
});

export default store;
