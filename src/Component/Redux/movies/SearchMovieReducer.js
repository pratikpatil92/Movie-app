const initialState = {
    search_results:{},
    error_msg:"",
    data_state:"NOT_INITIALIZE",
}

const searchReducer = (state=initialState, action)=>{
    switch(action.type){
        case "ON_SEARCH_SUCCESS":
            return{
                ...state,
                search_results:action.payload,
                data_state:"FETCHED_SUCCESS",
            } 
        case "ON_SEARCH_FAILURE":
            return{
                ...state,
                error_msg:action.payload,
                data_state:"NOT_INITIALIZE",
            }  
        case "ON_SEARCH_FETCHING":
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

export default searchReducer;