const initialState = {
    to_rated_movies:{},
    error_msg:"",
    data_state:"NOT_INITIALIZE",
}

const topRatedMovieReducer = (state=initialState, action)=>{
    switch(action.type){
        case "ON_TOPRATEDMOVIE_SUCCESS":
            return{
                ...state,
                to_rated_movies:action.payload,
                data_state:"FETCHED_SUCCESS",
            } 
        case "ON_TOPRATEDMOVIE_FAILURE":
            return{
                ...state,
                error_msg:action.payload,
                data_state:"NOT_INITIALIZE",
            }  
        case "ON_TOPRATEDMOVIE_FETCHING":
            return{
                ...state,
                data_state:"FETCHING",
            }                 
            


        default:
            return{
                ...state,
            }
    }

}

export default topRatedMovieReducer;