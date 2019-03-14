import React from "react";
import AboutInfo from "../components/About";
import AboutNav from "../components/AboutNav"
import Header from "../components/HeaderTwo"
import Footer from "../components/mainTwo"
function About () {
    return(
        <div>
            <Header/>
            <AboutNav/>
            <AboutInfo/>
            <Footer/>
        </div>
    )
}

export default About;

