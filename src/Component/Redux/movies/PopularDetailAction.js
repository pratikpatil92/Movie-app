import axios from "axios";

export const getPopularMovieDetail = (id) => {
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const movie_id = id;
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${Api_key}&language=en-US`
      )
      .then((res) => {
        if (res.status == 200) {
          // console.log(res)
          dispatch(ongetPopularMovieDetailSuccess(res.data));
        } else {
          // console("res_err",res)
          dispatch(ongetPopularMovieDetailFailure(res.message));
        }
      })
      .catch((err) => {
        // console.log(err);
        dispatch(ongetPopularMovieDetailFailure(err.message));
      });
  };
};

export const ongetPopularMovieDetailSuccess = (res) => {
  return {
    type: "ON_POPULARMOVIEDETAIL_SUCCESS",
    payload: res,
  };
};

export const ongetPopularMovieDetailFailure = (msg) => {
  return {
    type: "ON_POPULARMOVIEDETAIL_FAILURE",
    payload: msg,
  };
};

export const PopularMovieDetailFetching = () => {
  return {
    type: "ON_POPULARMOVIEDETAIL_FETCHING",
  };
};
