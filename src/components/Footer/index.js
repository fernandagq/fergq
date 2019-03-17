import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bootstrap from '../img/bootstrap.jpg';
import CSS3 from '../img/css3.jpg';
import jQuery from '../img/jquery.jpg';
import Jest from '../img/jest.jpg';
import JavaScript from '../img/javascript.jpg';
import MySQL from '../img/mysql.jpg';
import HTML5 from '../img/html5.jpg';
import LinkedIn from '../img/linkedin.jpg';
import Email from '../img/gmail.jpg';
import Github from '../img/github.jpg';
import "./style.css";



class Footer extends Component {
    render() {
        return (
            <div id='footerContainer'>
                <div className="card-footer text-muted">
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <ul>
                                    <h5>
                                        About
                                    </h5>
                                    <li>
                                        <Link to="/about" id="gtkm">Get to Know Me</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" id="cm">Contact Me</Link>
                                    </li>
                                    <li>
                                        <Link to="/resume" id="r">Resume</Link>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-md">
                                <ul>
                                    <h5>
                                        Projects
                                    </h5>
                                    <li>
                                        <a href="https://dry-caverns-62056.herokuapp.com/" id="dogmatchFooter">Dog Match</a>
                                    </li>
                                    <li>
                                        <a href="https://fernandagq.github.io/Wordscape/" id="wordscapeFooter">Wordscape</a>
                                    </li>
                                    <li>
                                        <a href="https://fernandagq.github.io/unit-4-game/" id="crystalFooter">Crystal Game</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md">
                                <ul>
                                    <h5>
                                        Stay Connected
                                </h5>
                                    <li>
                                        <a href="linkedin.com/in/fernanda-garcia-682098137"><img src={LinkedIn} className="connectFooter"></img></a>
                                        <a href="https://github.com/fernandagq" ><img src={Github} className="connectFooter"></img></a>
                                        <a href="mailto:fernandagq1@gmail.com"><img src={Email} className="connectFooter"></img></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md">
                                <ul>
                                    <h5>
                                        Technologies
                                     </h5>
                                    <img className="logoImg" src={MySQL}></img><img className="logoImg" src={CSS3}></img>
                                    <img className="logoImg" src={HTML5}></img>
                                    <img className="logoImg" src={Bootstrap}></img>
                                    <img className="logoImg" src={jQuery}></img>
                                    <img className="logoImg" src={Jest}></img>
                                    <img className="logoImg" src={JavaScript}></img>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;