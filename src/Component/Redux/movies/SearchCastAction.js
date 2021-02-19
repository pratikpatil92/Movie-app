import axios from "axios";

export const getSearchCast = (id) => {
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const movie_id = id;
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${Api_key}&language=en-US`
      )
      .then((res) => {
        if (res.status == 200) {
          console.log(res);
          dispatch(ongetSearchCastSuccess(res.data));
        } else {
          console("res_err", res);
          dispatch(ongetSearchCastFailure(res.message));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(ongetSearchCastFailure(err.message));
      });
  };
};

export const ongetSearchCastSuccess = (res) => {
  return {
    type: "ON_SEARCHCAST_SUCCESS",
    payload: res,
  };
};

export const ongetSearchCastFailure = (msg) => {
  return {
    type: "ON_SEARCHCAST_FAILURE",
    payload: msg,
  };
};

export const seachcastFetching = () => {
  return {
    type: "ON_SEARCHCAST_FETCHING",
  };
};
