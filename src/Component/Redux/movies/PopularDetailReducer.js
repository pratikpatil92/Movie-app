const initialState = {
  popular_movie_details: {},
  error_msg: "",
  data_state: "NOT_INITIALIZE",
};

const PopularMovieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_POPULARMOVIEDETAIL_SUCCESS":
      return {
        ...state,
        popular_movie_details: action.payload,
        data_state: "FETCHED_SUCCESS",
      };
    case "ON_POPULARMOVIEDETAIL_FAILURE":
      return {
        ...state,
        error_msg: action.payload,
        data_state: "NOT_INITIALIZE",
      };
    case "ON_POPULARMOVIEDETAIL_FETCHING":
      return {
        ...state,
        data_state: "FETCHING",
      };

    default:
      return {
        ...state,
      };
  }
};

export default PopularMovieDetailsReducer;
