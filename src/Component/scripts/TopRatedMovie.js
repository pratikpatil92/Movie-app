import React, { Component } from 'react';
import {getTopRatedMovies} from './../Redux/movies/TopratedAction';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import { Spinner } from 'reactstrap';
import './css/movies.css'

class TopRatedMovie extends Component {
    
    componentDidMount(){
        this.props.getTopRatedMovies();
    }
    render() {
        // console.log("page",this.props.movies)
        const to_rated_movies = this.props.to_rated_movies;
        if(to_rated_movies.data_state=="NOT_INITIALIZED" || to_rated_movies.data_state=="FETCHING"){
            return (
                <div>
                     <Spinner color="primary" />
                </div>
            )
        } else if(to_rated_movies.data_state=="FETCHED_SUCCESS"){
            console.log("page2",this.props)
                    return (
                        <div className="container-fluid justify-content-center slide">
                            
                            <div className="row justify-content-center">
                                {to_rated_movies.to_rated_movies.results.map((el,index)=>(
                                    

                                    <div className="col-lg-2 col-md-3 col-sm-3 col-12 m-5 text-light w-100 zoom">
                                        <Link to={`/popular-movie-detail/${el.id}`}><img className="rounded img-fluid" src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}></img></Link>
                                        <h6 className="mt-2 text-left">{el.title}</h6>
                                        <p>Rating: {el.vote_average}</p>
                                    </div>
                                    
                                ))}
                                </div>
                            
                            
                            
                        </div>
                    )}
                    else{
                        return(
                            <h1>Page Not found</h1>
                        )
                    }
    }
}

const mapStateToProps=state=>({
    to_rated_movies:state.to_rated_movies,
})

export default connect(mapStateToProps,{getTopRatedMovies})(withRouter(TopRatedMovie));
