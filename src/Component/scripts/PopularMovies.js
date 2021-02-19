import React, { Component } from "react";
import { getPopularMovies } from "./../Redux/movies/MovieAction";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import "./css/movies.css";

class PopularMovies extends Component {
  componentDidMount() {
    this.props.getPopularMovies();
  }
  render() {
    // console.log("page",this.props.movies)
    const movies = this.props.movies;
    if (
      movies.data_state == "NOT_INITIALIZED" ||
      movies.data_state == "FETCHING"
    ) {
      return (
        <div>
          <Spinner color="primary" />
        </div>
      );
    } else if (movies.data_state == "FETCHED_SUCCESS") {
      console.log("page1", this.props.movies);
      return (
        <div className="container-fluid justify-content-center slide">
          <div className="row justify-content-center">
            {movies.movies.results.map((el, index) => (
              <div className="col-lg-2 col-md-3 col-sm-3 col-12 m-5 text-light w-100 zoom text-center">
                <Link to={`/popular-movie-detail/${el.id}`}>
                  {" "}
                  <img
                    className="rounded img-fluid"
                    src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                  ></img>
                </Link>
                <h6 className="mt-2">{el.title}</h6>
                <p>Rating: {el.vote_average}</p>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return <h1>Page Not found</h1>;
    }
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps, { getPopularMovies })(
  withRouter(PopularMovies)
);
