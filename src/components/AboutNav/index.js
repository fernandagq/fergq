import React, { Component } from "react";
import "./style.css";
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';



class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div id="mainContainer">
        <div className="row">
          <div className="col-md-4">
          </div>
          <div id="Nav" className="col-md-4">
            <Navbar color="faded" light expand="md">
              <NavbarToggler onClick={this.toggleNavbar} />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <Link to="/" className="nav-link">Home</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/resume" className="nav-link">Resume</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/contact" className="nav-link">Contact</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/projects" className="nav-link">Projects</Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </div>
        <div className="col-md-4">
        </div>
      </div>
    );
  }
}

export default NavBar;