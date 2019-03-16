import React, {Component} from "react";
import "./style.css";
// import { Document, Page } from 'react-pdf';


// class Resume extends Component {

//   state = { 
//     numPages: null, 
//     pageNumber: 1,
//   };

//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   }
//   render() {
//     const { pageNumber, numPages } = this.state;

//     return (

//       <div id="mainContainer">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-2">
//             </div>
//             <div className="col-md-8">
//               <div className="jumbotron">
//                 <div style={{ width: 600 }}>
//                   <Document
//                     file="../img/Resume.pdf"
//                     onLoadSuccess={this.onDocumentLoadSuccess}
//                   ><Page pageNumber={pageNumber}
//                     width={600} /></Document>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-2">
//             </div>
//           </div>
//         </div>
//       </div>

//     );
//   }
// }
// export default Resume;

class Resume extends Component {

  render() {

    return (

      <div id="mainContainer">
        <div className="container">
          <div className="row">
            <div className="col-md-1">
            </div>
            <div className="col-md-10">
              <div className="jumbotron">
                <div >
                  <img id="resume" src= {require("../img/resume.jpg")}></img>
                </div>
              </div>
            </div>
            <div className="col-md-1">
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default Resume;