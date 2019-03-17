import React from "react";
import ContactInfo from "../components/Contact"
import ContactNav from "../components/ContactNav"
import Header from "../components/HeaderTwo"
import Footer from "../components/Footer"



function Contact () {
    return (
    <div>
        <Header/>
        <ContactNav/>
        <ContactInfo/>
        <Footer/>
    </div>
    )
}

export default Contact;