import axios from "axios";

export const getPopularMovies = () => {
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`
      )
      .then((res) => {
        if (res.status == 200) {
          // console.log(res)
          dispatch(onPupularMovieSuccess(res.data));
        } else {
          // console("res_err",res)
          dispatch(onPupularMovieFailure(res.message));
        }
      })
      .catch((err) => {
        // console.log(err);
        dispatch(onPupularMovieFailure(err.message));
      });
  };
};

export const onPupularMovieSuccess = (res) => {
  return {
    type: "ON_POPULARMOVIE_SUCCESS",
    payload: res,
  };
};

export const onPupularMovieFailure = (msg) => {
  return {
    type: "ON_POPULARMOVIE_FAILURE",
    payload: msg,
  };
};

export const PopularMoviesFetching = () => {
  return {
    type: "ON_POPULARMOVIE_FETCHING",
  };
};
