import React, { lazy, Suspense } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Component/scripts/Header";

const LazyTopRatedMovies = lazy(() =>
  import("./Component/scripts/TopRatedMovie")
);
const LazyCarousel = lazy(() => import("./Component/scripts/Carousel"));
const LazyPopularMovies = lazy(() =>
  import("./Component/scripts/PopularMovies")
);
const LazyPopularMovieDetails = lazy(() =>
  import("./Component/scripts/PopularMovieDetails")
);
const LazyUpcomingMovies = lazy(() =>
  import("./Component/scripts/UpcomingMovies")
);
const LazySearchResults = lazy(() =>
  import("./Component/scripts/SearchResults")
);
const LazySearchMovieDetails = lazy(() =>
  import("./Component/scripts/SearchMovieDetails")
);
const LazyNewCarousel = lazy(() => import("./Component/scripts/NewCarousel"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Header></Header>
          <div className="App">
            <Switch>
              <Route exact path="/" component={LazyPopularMovies}></Route>
              <Route
                exact
                path="/top-rated-movie"
                component={LazyTopRatedMovies}
              ></Route>
              <Route
                exact
                path="/up-coming-movie"
                component={LazyUpcomingMovies}
              ></Route>
              <Route
                exact
                path="/popular-movie-detail/:id"
                component={LazyPopularMovieDetails}
              ></Route>
              <Route
                exact
                path="/search-movie-detail/:id"
                component={LazySearchMovieDetails}
              ></Route>
              <Route
                exact
                path="/search-results/:name"
                component={LazySearchResults}
              ></Route>
              <Route exact path="/home" component={LazyCarousel}></Route>
              <Route exact path="/carousel" component={LazyNewCarousel}></Route>
            </Switch>
          </div>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
