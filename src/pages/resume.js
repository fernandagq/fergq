import React from "react";
import ResumeInfo from "../components/Resume"
import ResumeNav from "../components/ResumeNav"
import Header from "../components/HeaderTwo"
import Footer from "../components/mainTwo"



function Resume () {
    return (
    <div>
        <Header/>
        <ResumeNav/>
        <ResumeInfo/>
        <Footer/>
    </div>
    )
}

export default Resume;