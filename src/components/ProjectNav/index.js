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
      <div id="projectContainer">
        <div className="row">
          <div className="col-md-4">
          </div>
          <div id="Nav" className="col-md-4">
            <Navbar color="faded" light expand="sm">
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
                    <Link to="/about" className="nav-link">About</Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
