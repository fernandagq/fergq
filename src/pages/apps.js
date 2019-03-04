import React from "react";
import ProjectNav from "../components/ProjectNav"
import Projects from "../components/Projects"
import Header from "../components/Header"



function Home () {
    return (
    <div>
        <ProjectNav/>
        <Projects/>
        <Header/>
    </div>
    )
}

export default Home;