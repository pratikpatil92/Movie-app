import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';

import {Link, withRouter} from 'react-router-dom'

export default class Header extends Component {
    constructor(props){
        super();
        this.state={isOpen:false, 
                    name:""};
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState({isOpen:!this.state.isOpen});
    }
    logout=()=>{
        this.props.onLogout(this.props.history);
    }

    onHandleChange= (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit = ()=>{
        if (this.state.name){
            this.history.push(`/search-results/${this.state.name}`)
        }
    }
    
    render() {
        const {isOpen, name}=this.state;
        return (
            <div>
            <Navbar color="dark" dark expand="md">
            <div className="container">
              <NavbarBrand><Link className="navbar-brand" to="/">MovieDb</Link></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto bg-dark" navbar>
                  <NavItem>
                    <Link className="nav-link" to="/">Popular</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/top-rated-movie">Top Rated</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/up-coming-movie">Upcoming</Link>
                  </NavItem>
                  <NavItem>
                    <div className="form-inline my-2 my-lg-0"><input type="text" placeholder="Movie Name" className="form-control mr-sm-2" name="name" value={name} onChange={this.onHandleChange}></input>
                    <Link className="btn btn-secondary my-2 my-sm-0"  to={`/search-results/${name}`}>Search</Link></div>
                  </NavItem>
                  
                </Nav>
              </Collapse>
              </div>
            </Navbar>
          </div>
        )
    }
}
