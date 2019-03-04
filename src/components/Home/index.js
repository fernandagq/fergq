import React from "react";
import "./style.css"
import { Link } from 'react-router-dom';


function HomeComponentOne() {
    return (

        <div id="mainContainer">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <Link to="/about"><div id="mainImage"></div></Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HomeComponentOne;

