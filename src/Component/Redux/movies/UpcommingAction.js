import axios from "axios";

export const getUpComingMovies = () => {
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`
      )
      .then((res) => {
        if (res.status == 200) {
          console.log(res);
          dispatch(onUpComingMovieSuccess(res.data));
        } else {
          console("res_err", res);
          dispatch(onUpComingMovieFailure(res.message));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(onUpComingMovieFailure(err.message));
      });
  };
};

export const onUpComingMovieSuccess = (res) => {
  return {
    type: "ON_UPCOMINGMOVIE_SUCCESS",
    payload: res,
  };
};

export const onUpComingMovieFailure = (msg) => {
  return {
    type: "ON_UPCOMINGMOVIE_FAILURE",
    payload: msg,
  };
};

export const TopUpComingFetching = () => {
  return {
    type: "ON_UPCOMINGMOVIE_FETCHING",
  };
};
