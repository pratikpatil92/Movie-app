import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../Redux/movies/MovieAction";
import { Spinner } from "reactstrap";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SingleMovieCard from "./SingleMovieCard";
import "./css/slider.css";

function NewCarousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <ArrowForwardIosIcon />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <ArrowBackIosIcon />
      </div>
    );
  };
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies);

  useEffect(() => {
    async function fetchMovies() {
      await dispatch(getPopularMovies());
    }
    fetchMovies();
  }, []);
  if (
    popularMovies.data_state === "NOT_INITIALIZE" ||
    popularMovies.data_state === "FETCHING"
  ) {
    return (
      <div>
        <Spinner color="primary" />
      </div>
    );
  } else if (popularMovies.data_state === "FETCHED_SUCCESS") {
    return (
      <div className="tray-container">
        <div className="container">
          <h3>Popular Movies</h3>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {popularMovies.movies.results.map((e, index) => (
              <SingleMovieCard movie={e} key={index} />
            ))}
          </Slider>
        </div>
        <div className="container">
          <h3>Popular Movies</h3>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {popularMovies.movies.results.map((e, index) => (
              <SingleMovieCard movie={e} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default NewCarousel;
