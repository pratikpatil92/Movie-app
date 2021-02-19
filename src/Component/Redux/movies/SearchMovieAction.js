import axios from "axios";

export const getSearch = (name) => {
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const movie_name = name;
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movie_name}&page=1&include_adult=false`
      )
      .then((res) => {
        if (res.status == 200) {
          console.log(res);
          dispatch(ongetSearchSuccess(res.data));
        } else {
          // console("res_err",res)
          dispatch(ongetSearchFailure(res.message));
        }
      })
      .catch((err) => {
        // console.log(err);
        dispatch(ongetSearchFailure(err.message));
      });
  };
};

export const ongetSearchSuccess = (res) => {
  return {
    type: "ON_SEARCH_SUCCESS",
    payload: res,
  };
};

export const ongetSearchFailure = (msg) => {
  return {
    type: "ON_SEARCH_FAILURE",
    payload: msg,
  };
};

export const searchFetching = () => {
  return {
    type: "ON_SEARCH_FETCHING",
  };
};
