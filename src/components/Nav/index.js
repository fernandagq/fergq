import React, {Component} from "react";
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
    render(){
    return (
        <div id="mainContainer">
        <div className="container">
  <div className="row">
    <div id="extraNav" className="col-md-2">
    <Navbar color="faded" light>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
              <Link to="/projects"  className="nav-link">Projects</Link>
              </NavItem>
              <NavItem>
              <Link to="/resume" className="nav-link">Resume</Link>
              </NavItem>
              <NavItem>
              <Link to="/contact"  className="nav-link">Contact</Link>
              </NavItem>
              <NavItem>
              <Link to="/about"  className="nav-link">About</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
    <div className="col-md-8">
            <nav className="navbar navbar-trans navbar-expand-lg navbar-light bg-clear" id="homeNav">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/projects" id="homeProjects" className="nav-link">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/resume" id="homeResume" className="nav-link">Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" id="homeContact" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" id="homeContact" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    <div className="col-md-2">
    </div>
  </div>
</div>
    );
}
}

export default NavBar;