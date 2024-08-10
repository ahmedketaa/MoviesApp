    import { combineReducers } from 'redux';
    import FavoriteReducer from './favorite';
import tvShowsReducer from './tvShowsReducer';

    export default combineReducers({
        favorites: FavoriteReducer,
        tvShows: tvShowsReducer,
        });

