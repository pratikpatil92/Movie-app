import React, { Component } from 'react'
import {getPopularMovieDetail} from './../Redux/movies/PopularDetailAction';
import {getCast} from './../Redux/movies/CastAction';
import {withRouter, Link} from 'react-router-dom'; 
import {connect} from 'react-redux';
import { Spinner } from 'reactstrap';
import './css/movies.css'

class PopularMovieDetails extends Component {
    constructor(props){
        super(props);
        const id=props.match.params.id;
        this.getPopularMovieDetail(id)
        this.getCast(id)
    }

    getPopularMovieDetail=async (id)=>{
        await this.props.getPopularMovieDetail(id);
    }
    getCast=async (id)=>{
        await this.props.getCast(id);
    }
    render() {
        
        const popular_movie_details = this.props.popular_movie_details;
        const cast = this.props.casts;
        console.log("a",popular_movie_details)
        console.log("cast",cast)
        if(popular_movie_details.data_state=="NOT_INITIALIZED" || popular_movie_details.data_state=="FETCHING"){
            return (
                <div>
                     <Spinner color="primary" />
                </div>
            )
        }else if(popular_movie_details.data_state=="FETCHED_SUCCESS"){
            console.log("page1",popular_movie_details)
        return (
           <div className="slide">
            <div className="container-fluid" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${popular_movie_details.popular_movie_details.backdrop_path})`, backgroundSize:"cover", position:"relative", backgroundRepeat:"no-repeat", height:"100vh", width:"100%"}}>
                
                    <div className="col-lg-4 mr-auto h-100 info text-light" >
                             <div className="text-center p-4"><h1>{popular_movie_details.popular_movie_details.title}</h1>
                             <h4 className="text-right">" {popular_movie_details.popular_movie_details.tagline} "</h4></div>
                            <div className="p-3"> <h6 className="pt-2">Rating: {popular_movie_details.popular_movie_details.vote_average}</h6></div>
                            <div className="p-3"><h6>overview:</h6> <p>{popular_movie_details.popular_movie_details.overview}</p></div>
                            <div className="m-3">
                                <div className="row container-fluid">
                                 <div className="col-md-6 col-sm-6 ">
                                     <h6>Budget: </h6><p>${popular_movie_details.popular_movie_details.budget}</p>
                                 </div>
                                 <div className="col-md-6 col-sm-6">
                                     <h6>Revenue: </h6><p>${popular_movie_details.popular_movie_details.revenue}</p>
                                 </div>
                                </div>
                             </div>
                             <div className="p-3">
                                 <h6>Release Date: {new Date(popular_movie_details.popular_movie_details.release_date).toString().slice(0,16)}</h6>
                                 <p></p>
                             </div>
                             
                    </div>
                    
                    </div>
                    <div className="container-fluid p-3">
                        <h1 className="text-left text-light">Cast</h1>
                        <div className="row">
                            {cast.casts.cast.slice(0,6).map((el,index)=>(
                                <div className="col-lg-2 col-md-2 col-sm-2 text-light">
                                    <img className="img-fluid" src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}></img>
                                    {el.name} <p>Character: {el.character}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                
                
            </div>
        )}else{
            return(
            <h1>Not Found</h1>
            )
        }
    }
}

const mapStateToProps=state=>({
    popular_movie_details:state.popular_movie_details,
    casts:state.casts,
});


export default connect (mapStateToProps, {getPopularMovieDetail, getCast})(withRouter(PopularMovieDetails));
