import {combineReducers} from 'redux';
import movieReducer from './Redux/movies/MovieReducer';
import topRatedMovieReducer from './Redux/movies/TopRatedReducer';
import upcomingMovieReducer from './Redux/movies/UpcommingReducer';

export default combineReducers({
    movies:movieReducer,
    to_rated_movies:topRatedMovieReducer,
    up_coming_movie:upcomingMovieReducer,
})