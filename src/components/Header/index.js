import React from "react";
import "./style.css"

function HomeHeader() {
    return (

        <div id="mainContainer">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div id="mainHeader" className="col-md-8">
                        <div id="fullName"><h1>Fernanda Garcia</h1>
                        </div>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HomeHeader;