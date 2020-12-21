const initialState = {
    casts:{},
    error_msg:"",
    data_state:"NOT_INITIALIZE",
}

const castReducer = (state=initialState, action)=>{
    switch(action.type){
        case "ON_CAST_SUCCESS":
            return{
                ...state,
                casts:action.payload,
                data_state:"FETCHED_SUCCESS",
            } 
        case "ON_CAST_FAILURE":
            return{
                ...state,
                error_msg:action.payload,
                data_state:"NOT_INITIALIZE",
            }  
        case "ON_CAST_FETCHING":
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

export default castReducer;