import axios from 'axios';

export const getTopRatedMovies = ()=>{
    const Api_key = "c45a857c193f6302f2b5061c3b85e743";
    return(dispatch)=>{
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1`)
        .then(res=>{
            if(res.status==200){
                console.log(res)
                dispatch(onTopRatedMovieSuccess(res.data))
            }else{
                console("res_err",res)
                dispatch(onTopRatedMovieFailure(res.message))
            }
           
        }).catch(err=>{
            console.log(err);
            dispatch(onTopRatedMovieFailure(err.message))
        })
    }
}

export const  onTopRatedMovieSuccess = (res)=>{
    return{
        type:"ON_TOPRATEDMOVIE_SUCCESS",
        payload:res,
    }
}

export const  onTopRatedMovieFailure = (msg)=>{
    return{
        type:"ON_TOPRATEDMOVIE_FAILURE",
        payload:msg,
    }
}

export const TopRatedMoviesFetching=()=>{
    return{
        type:"ON_TOPRATEDMOVIE_FETCHING"
    }
}
