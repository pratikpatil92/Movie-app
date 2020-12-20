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
        this.state={isOpen:false};
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState({isOpen:!this.state.isOpen});
    }
    logout=()=>{
        this.props.onLogout(this.props.history);
    }
    render() {
        const {isOpen}=this.state;
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
                    <div className="form-inline my-2 my-lg-0"><input type="text" placeholder="Movie Name" className="form-control mr-sm-2"></input>
                    <button className="btn btn-secondary my-2 my-sm-0">Search</button></div>
                  </NavItem>
                  
                </Nav>
              </Collapse>
              </div>
            </Navbar>
          </div>
        )
    }
}
