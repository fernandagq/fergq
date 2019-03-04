import React from "react";
import "./style.css"


function Contact() {
    return (

        <div id="mainContainer">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        {/* <Link to="/about"><h2 id="myInfo">Get to Know Me</h2></Link> */}
                    </div>
                    <div className="col-md-8">
                        <div id="main">
                            <div className="row">
                                <div className="col-md-2">
                                </div>
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="contact">
                                            <div id="contactTitle"><p>Contact Me</p></div>
                                            <form method="POST" action="https://formspree.io/fgarcia@email.wm.edu">
                                            <input type="hidden" name="_next" value="/" /> 
                                                <div className="form-group">
                                                    <label for="exampleFormControlInput1">Name</label>
                                                    <input type="name" name="name" className="form-control" id="exampleFormControlInput1" placeholder="Fernanda Garcia"></input>
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleFormControlInput1">Email</label>
                                                    <input type="email" name="email"  className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleFormControlTextarea1">Message</label>
                                                    <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="5"></textarea>
                                                </div>

                                                <input type="submit" value="Submit" className="submit"></input>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div id="arrow" className="col-md-2">
                    </div> */}
                </div>
            </div>
        </div>

    );
}

export default Contact;
