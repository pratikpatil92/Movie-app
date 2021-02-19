const initialState = {
  search_casts: {},
  error_msg: "",
  data_state: "NOT_INITIALIZE",
};

const searchcastReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_SEARCHCAST_SUCCESS":
      return {
        ...state,
        search_casts: action.payload,
        data_state: "FETCHED_SUCCESS",
      };
    case "ON_SEARCHCAST_FAILURE":
      return {
        ...state,
        error_msg: action.payload,
        data_state: "NOT_INITIALIZE",
      };
    case "ON_SEARCHCAST_FETCHING":
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

export default searchcastReducer;
