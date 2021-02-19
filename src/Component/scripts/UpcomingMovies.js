import React, { Component } from "react";
import { getUpComingMovies } from "./../Redux/movies/UpcommingAction";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import "./css/movies.css";

class UpComingMovie extends Component {
  componentDidMount() {
    this.props.getUpComingMovies();
  }
  render() {
    // console.log("page",this.props.movies)
    const up_coming_movie = this.props.up_coming_movie;
    if (
      up_coming_movie.data_state == "NOT_INITIALIZED" ||
      up_coming_movie.data_state == "FETCHING"
    ) {
      return (
        <div>
          <Spinner color="primary" />
        </div>
      );
    } else if (up_coming_movie.data_state == "FETCHED_SUCCESS") {
      console.log("page1", this.props.up_coming_movie);
      return (
        <div>
          <div className="container-fluid slide">
            <div className="row justify-content-center">
              {up_coming_movie.up_coming_movie.results.map((el, index) => (
                <div className="col-lg-2 col-md-3 col-sm-3 col-12 m-5 text-light w-100 zoom">
                  <Link to={`/popular-movie-detail/${el.id}`}>
                    <img
                      className="rounded img-fluid"
                      src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                    ></img>
                  </Link>
                  <h6 className="mt-2 text-left">{el.title}</h6>
                  <p>Rating: {el.vote_average}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Page Not found</h1>;
    }
  }
}

const mapStateToProps = (state) => ({
  up_coming_movie: state.up_coming_movie,
});

export default connect(mapStateToProps, { getUpComingMovies })(
  withRouter(UpComingMovie)
);
