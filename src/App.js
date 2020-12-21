import logo from './logo.svg';
import './App.css';
import store from './store'
import PopularMovies from './Component/scripts/PopularMovies';
import TopRatedMovie from './Component/scripts/TopRatedMovie';
import UpComingMovie from './Component/scripts/UpcomingMovies';
import PopularMovieDetails from './Component/scripts/PopularMovieDetails'
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from 'react-router-dom';

import Header from './Component/scripts/Header'

function App() {
  return (
      <Provider store={store}>
        
      <Router>
      <Header></Header>
      <div className="App">
        <Route exact path="/" component={PopularMovies}></Route>
        <Route exact path="/top-rated-movie" component={TopRatedMovie}></Route>
        <Route exact path="/up-coming-movie" component={UpComingMovie}></Route>
        <Route exact path="/popular-movie-detail/:id" component={PopularMovieDetails}></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
