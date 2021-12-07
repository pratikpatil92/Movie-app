import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Card, CardImg } from "reactstrap";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./css/cardHover.css";

export default function SingleMovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`/popular-movie-detail/${movie.id}`}>
        <Card>
          <CardImg
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
          <div className="details">
            <div>
              <Typography variant="subtitle2" display="block" gutterBottom>
                {movie.title}
              </Typography>
              <Typography variant="caption" display="block">
                Rating: {movie.vote_average}
              </Typography>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
}
