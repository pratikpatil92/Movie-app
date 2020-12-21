import React, { Component } from 'react'
import {getSearch} from './../Redux/movies/SearchMovieAction';
import {withRouter, Link} from 'react-router-dom'; 
import {connect} from 'react-redux';
import { Spinner } from 'reactstrap';
import './css/movies.css'

class SearchResults extends Component {
    constructor(props){
        super(props);
        const name=props.match.params.name;
        this.getSearch(name)
    }

    getSearch=async (name)=>{
        await this.props.getSearch(name);
    }
    render() {
        const search_results = this.props.search_results;
        console.log("a",search_results)
        if(search_results.data_state=="NOT_INITIALIZED" || search_results.data_state=="FETCHING"){
            return (
                <div>
                     <Spinner color="primary" />
                </div>
            )
        }else if(search_results.data_state=="FETCHED_SUCCESS"){
            console.log("page1",search_results)
        return (
            <div>
                        <div className="container-fluid slide">
                            
                            <div className="row justify-content-center">
                                {search_results.search_results.results.map((el,index)=>(
                                    

                                    <div className="col-lg-2 col-md-3 col-sm-3 col-12 m-5 text-light w-100 zoom">
                                        <Link to={`/search-movie-detail/${el.id}`}><img className="rounded img-fluid" src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}></img></Link>
                                        <h6 className="mt-2 text-left">{el.title}</h6>
                                        <p>Rating: {el.vote_average}</p>
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
    search_results:state.search_results,
});


export default connect (mapStateToProps, {getSearch})(withRouter(SearchResults));
