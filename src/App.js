import logo from "./logo.svg";
import "./App.css";
import React, { Suspense } from "react";
import store from "./store";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import Header from "./Component/scripts/Header";
import { CircularProgress } from "@material-ui/core";

// Lazy loading
const lazyPopularMovies = React.lazy(() =>
  import("./Component/scripts/PopularMovies")
);
const lazyTopRatedMovie = React.lazy(() =>
  import("./Component/scripts/TopRatedMovie")
);
const lazyUpComingMovie = React.lazy(() =>
  import("./Component/scripts/PopularMovieDetails")
);
const lazySearchResults = React.lazy(() =>
  import("./Component/scripts/SearchResult")
);
const lazySearchMovieDetails = React.lazy(() =>
  import("./Component/scripts/SearchMovieDetails")
);
const lazyPopularMovieDetails = React.lazy(() =>
  import("./Component/scripts/PopularMovieDetails")
);



function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<CircularProgress />}>
        <Router>
          <Header></Header>
          <div className="App">
            <Route
              exact 
              path="/" 
              component={lazyPopularMovies}>
            </Route>
            <Routes
              exact
              path="/top-rated-movie"
              component={lazyTopRatedMovie}
            ></Routes>
            <Route
              exact
              path="/up-coming-movie"
              component={lazyUpComingMovie}
            ></Route>
            <Route
              exact
              path="/popular-movie-detail/:id"
              component={lazyPopularMovieDetails}
            ></Route>
            <Route
              exact
              path="/search-movie-detail/:id"
              component={lazySearchMovieDetails}
            ></Route>
            <Route
              exact
              path="/search-results/:name"
              component={lazySearchResults}
            ></Route>
          </div>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
