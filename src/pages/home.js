import React from "react";
import Main from "../components/mainTwo/index"
import Nav from "../components/Nav"
import Header from "../components/HeaderTwo"
import MainImage from "../components/Home"
import Footer from "../components/Footer"



function Home () {
    return (
    <div>
        <Header/>
        <Nav/>
        <MainImage/>
        <Main/>
        <Footer/>
    </div>
    )
}

export default Home;