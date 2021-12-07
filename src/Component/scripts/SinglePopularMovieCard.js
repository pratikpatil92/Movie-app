import React from "react";
import "./css/movieDetail.css";
function SinglePopularMovieCard({ popular_movie_details }) {
  return (
    <div className="master-container">
      <div className="movie-detail-card">
        <div className="movie-image">
          <img
            src={`https://image.tmdb.org/t/p/w500${popular_movie_details.backdrop_path}`}
          />
        </div>
        <div className="image-gradient"></div>
        <div className="content-container">
          <div className="movie_header">
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/w500${popular_movie_details.poster_path}`}
            />
            <h2>{popular_movie_details.title}</h2>
            <h4>
              {popular_movie_details.tagline
                ? "'" + popular_movie_details.tagline + "'"
                : "Rating : " + popular_movie_details.vote_average}
            </h4>
            <span className="minutes">{popular_movie_details.runtime} min</span>
            <p className="type">
              {popular_movie_details.genres.map((e) => e.name + ",")}
            </p>
            <p className="date">
              Release Date :{" "}
              {new Date(popular_movie_details.release_date)
                .toString()
                .slice(0, 16)}{" "}
            </p>
          </div>
          <div className="movie_desc">
            <h3>Overview</h3>
            <p className="text">{popular_movie_details.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePopularMovieCard;

// https://image.tmdb.org/t/p/w500/8tNX8s3j1O0eqilOQkuroRLyOZA.jpg
