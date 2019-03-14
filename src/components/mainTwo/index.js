import React from "react";
import "./style.css";
import Mongo from "../img/mongo.jpg";
import Express from "../img/express.jpg";
import ReactLogo from "../img/react.jpg";
import Node from "../img/node.jpg";



function MainTwo() {
    return (

        <div id="mainTwoContainer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <img className="mernStack" src={Mongo}></img>
                    <p>M</p>
                    </div>
                    <div className="col-md-3">
                    <img className="mernStack" src={Express}></img>
                    <p>E</p>
                    </div>
                    <div className="col-md-3">
                    <img className="mernStack" src={ReactLogo}></img>
                    <p>R</p>
                    </div>
                    <div className="col-md-3">
                    <img className="mernStack" src={Node}></img>
                    <p>N</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MainTwo;