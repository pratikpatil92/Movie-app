import {combineReducers} from 'redux';
import movieReducer from './Redux/movies/MovieReducer';
import topRatedMovieReducer from './Redux/movies/TopRatedReducer';
import upcomingMovieReducer from './Redux/movies/UpcommingReducer';
import PopularMovieDetailsReducer from './Redux/movies/PopularDetailReducer';
import castReducer from './Redux/movies/CastReducer';
import searchReducer from './Redux/movies/SearchMovieReducer';
import searchcastReducer from './Redux/movies/SearchCastReducer'

export default combineReducers({
    movies:movieReducer,
    to_rated_movies:topRatedMovieReducer,
    up_coming_movie:upcomingMovieReducer,
    popular_movie_details:PopularMovieDetailsReducer,
    casts:castReducer,
    search_results:searchReducer,
    search_casts:searchcastReducer,
})