import React, { Component } from 'react';
import "./style.css"


class Header extends Component {
    render() {
        return (
            <div>
                <div className="card-header">
                    <div id="headerInfo">
                    <p>Fernanda G.Q.</p>
                    <p className="title">Full Stack Web Developer</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;