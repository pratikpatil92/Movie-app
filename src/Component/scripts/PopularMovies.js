import React, { Component } from 'react';
import {getPopularMovies} from './../Redux/movies/MovieAction';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Spinner } from 'reactstrap';
import './css/movies.css'

class PopularMovies extends Component {
    
    componentDidMount(){
        this.props.getPopularMovies();
    }
    render() {
        // console.log("page",this.props.movies)
        const movies = this.props.movies;
        if(movies.data_state=="NOT_INITIALIZED" || movies.data_state=="FETCHING"){
            return (
                <div>
                     <Spinner color="primary" />
                </div>
            )
        } else if(movies.data_state=="FETCHED_SUCCESS"){
            console.log("page1",this.props.movies)
                    return (
                        <div className="container-fluid justify-content-center slide">
                            
                            <div className="row">
                                {movies.movies.results.map((el,index)=>(
                                    

                                    <div className="col-md-1 m-5 text-light w-100 zoom">
                                        <img className="text-center" height="300" width="190" src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}></img>
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
    movies:state.movies,
})

export default connect(mapStateToProps,{getPopularMovies})(withRouter(PopularMovies));
