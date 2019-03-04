import React from "react";
import "./style.css"


function HomeComponentThree() {
  return (

    <div id="mainContainer">
      <div className="card-columns">
        <div className="card">
          <a href="https://fernandagq.github.io/Wordscape/" id="wordscapeProj"><img className="card-img-top" src={require('../img/wordscrape.jpg')} alt="Card image cap"></img></a>
          <div id="wordscape" className="card-body">
            <h5 className="card-title">Wordscape</h5>
            <p className="card-text">The vocabulary enrichment and study app. Search a word, save the definition, and study!</p>
          </div>
        </div>
        {/* <div className="card">
    <img src={require('../img/testing.jpg')} className="card-img-top" alt="..."></img>
  </div> */}
        <div className="card">
          <a href="https://fernandagq.github.io/unit-4-game/" id="crystals"><img src={require('../img/crystals.jpg')} className="card-img-top" alt="..."></img></a>
        </div>


        <div className="card">
         <a href="https://dry-caverns-62056.herokuapp.com/" id="dog"><img className="card-img-top" src={require("../img/dogmatch.jpg")} alt="Card image cap"></img></a> 
          <div id="dogMatch" className="card-body">
            <h5 className="card-title">Dog Match!</h5>
            <p className="card-text">We seek to match potential pet owners with the breed that best fits their lifestyle.</p>
          </div>
        </div>
        {/* <div className="card p-3 text-right">
          <blockquote className="blockquote mb-0">
            <p>Card4</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div> */}

        <div className="card">
          <a href="https://skinproducts.herokuapp.com/" id="whatFace"><img className="card-img-top" src={require('../img/skin.jpg')} alt="Card image cap"></img></a>
          <div id="face" className="card-body">
            <h5 className="card-title">What the Face</h5>
            <p className="card-text">With the lack of knowledge on harmful skincare and makeup ingredients, this app will help you understand what you're using on your skin.</p>
          </div>
        </div>
        <div id="logoCont"className="card">
          
            <span classNameName="nav-item">
              <a href="https://github.com/fernandagq" id="github"><img src={require("../img/github.png")}></img></a>
            </span>
          
        </div>

      </div>
    </div>

  );
}

export default HomeComponentThree;