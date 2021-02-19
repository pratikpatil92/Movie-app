import axios from "axios";

export const getCast = (id) => {
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
          dispatch(ongetCastSuccess(res.data));
        } else {
          console("res_err", res);
          dispatch(ongetCastFailure(res.message));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(ongetCastFailure(err.message));
      });
  };
};

export const ongetCastSuccess = (res) => {
  return {
    type: "ON_CAST_SUCCESS",
    payload: res,
  };
};

export const ongetCastFailure = (msg) => {
  return {
    type: "ON_CAST_FAILURE",
    payload: msg,
  };
};

export const castFetching = () => {
  return {
    type: "ON_CAST_FETCHING",
  };
};
