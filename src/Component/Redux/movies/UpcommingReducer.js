const initialState = {
    up_coming_movie:{},
    error_msg:"",
    data_state:"NOT_INITIALIZE",
}

const upcomingMovieReducer = (state=initialState, action)=>{
    switch(action.type){
        case "ON_UPCOMINGMOVIE_SUCCESS":
            return{
                ...state,
                up_coming_movie:action.payload,
                data_state:"FETCHED_SUCCESS",
            } 
        case "ON_UPCOMINGMOVIE_FAILURE":
            return{
                ...state,
                error_msg:action.payload,
                data_state:"NOT_INITIALIZE",
            }  
        case "ON_UPCOMINGMOVIE_FETCHING":
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

export default upcomingMovieReducer;