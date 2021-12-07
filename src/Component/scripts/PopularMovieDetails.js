import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovieDetail } from "./../Redux/movies/PopularDetailAction";
import { getCast } from "./../Redux/movies/CastAction";
import { Spinner } from "reactstrap";
import "./css/movies.css";
import SinglePopularMovieCard from "./SinglePopularMovieCard";
import Grid from "@material-ui/core/Grid";

function PopularMovieDetails({ match }) {
  const id = match.params.id;
  const dispatch = useDispatch();
  const popular_movie_details = useSelector(
    (state) => state.popular_movie_details
  );
  const cast = useSelector((state) => state.casts);
  useEffect(() => {
    async function fetchMovies() {
      await dispatch(getPopularMovieDetail(id));
    }
    async function fetchCasts() {
      await dispatch(getCast(id));
    }
    fetchMovies();
    fetchCasts();
  }, []);
  if (
    (popular_movie_details.data_state === "NOT_INITIALIZED" &&
      cast.data_state === "NOT_INITIALIZED") ||
    (popular_movie_details.data_state == "FETCHING" &&
      cast.data_state === "FETCHING")
  ) {
    return (
      <div>
        <Spinner color="primary" />
      </div>
    );
  } else if (
    popular_movie_details.data_state === "FETCHED_SUCCESS" &&
    cast.data_state === "FETCHED_SUCCESS"
  ) {
    return (
      <div className="slide">
        <SinglePopularMovieCard
          popular_movie_details={popular_movie_details.popular_movie_details}
        />
        <div className="cast-container">
          <h3>Cast</h3>
          <Grid container justify="center" spacing={2}>
            {cast.casts.cast.slice(0, 6).map((el, index) => (
              <Grid item key={index} xs={12} sm={4} md={2} lg={2}>
                <img
                  className="img-fluid"
                  src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                ></img>
                {el.name} <p>Character: {el.character}</p>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  } else {
    return <h1>Not Found</h1>;
  }
}

export default PopularMovieDetails;
