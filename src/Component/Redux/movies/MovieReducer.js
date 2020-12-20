const initialState = {
    movies:{},
    error_msg:"",
    data_state:"NOT_INITIALIZE",
}

const movieReducer = (state=initialState, action)=>{
    switch(action.type){
        case "ON_POPULARMOVIE_SUCCESS":
            return{
                ...state,
                movies:action.payload,
                data_state:"FETCHED_SUCCESS",

            }
        case "ON_POPULARMOVIE_FAILURE":
            return{
                ...state,
                error_msg:action.payload,
                data_state:"NOT_INITIALIZE"

            }    
        case "ON_POPULARMOVIE_FETCHING":
            return {
                ...state,
                data_state:"FETCHING",
            }
        case "ON_TOPRATEDMOVIE_SUCCESS":
            return{
                ...state,
                data_state:"FETCHED_SUCCESS",
            } 
        case "ON_TOPRATEDMOVIE_FAILURE":
            return{
                ...state,
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

export default movieReducer;