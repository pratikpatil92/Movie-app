import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/newCarousel.css";
import { getPopularMovies } from "../Redux/movies/MovieAction";
import { Spinner } from "reactstrap";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SingleMovieCard from "./SingleMovieCard";

function ImageSlider() {
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
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 5,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 3,
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
  console.log(popularMovies);
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
      <div className="main-container">
        <div className="tray-area">
          <div className="trays-container">
            <div className="trays">
              <div>
                <div className="tray-container">
                  <div className="tray-wrapper">
                    <div className="tray-carousel">
                      <div className="container">
                        <h2 className="tray-title">Popular Movies</h2>
                      </div>
                      <div className="slider-container">
                        <Slider {...settings}>
                          {popularMovies.movies.results.map((e, index) => (
                            <SingleMovieCard movie={e} key={index} />
                          ))}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="tray-container">
                  <div className="tray-wrapper">
                    <div className="tray-carousel">
                      <div className="container">
                        <h2 className="tray-title">Popular Movies</h2>
                      </div>
                      <div className="slider-container">
                        <Slider {...settings}>
                          {popularMovies.movies.results.map((e, index) => (
                            <SingleMovieCard movie={e} key={index} />
                          ))}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSlider;
