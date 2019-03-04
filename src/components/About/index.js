import React from "react";
import "./style.css"

function About() {
  return (
    <div id="mainContainer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div id="aboutImage2" className="jumbotron jumbotron-fluid">
              <div className="container">
                <p className="lead"></p>
              </div>
            </div>
            <div id="cardThree" className="card">
              <div className="card-body">
                <h5 className="card-title">Copacabana</h5>
                <h6 className="card-subtitle mb-2 text-muted">Bolivia</h6>
                <p className="card-text">This image was taken in Copacabana, a small town from Bolivia. It's home to the highest altitude in Bolivia and one of my favorite spots in the world.</p>
              </div>
            </div>

          </div>
          <div className="col-md-4">
            <div id="aboutImage" className="jumbotron jumbotron-fluid">
              <div className="container">
                <p className="lead"></p>
              </div>
            </div>
            <div id="cardOne" className="card">
              <div className="card-body">
                <h5 className="card-title">Full Stack Web Developer</h5>
                <h6 className="card-subtitle mb-2 text-muted">Siblings: Alejandro, Natalia, and Alan</h6>
                <p className="card-text">When I realized I could create apps to solve simple problems for my family, it became more of a passion than a lukewarm interest.  <a href="https://fernandagq.github.io/Wordscape/" className="card-link">Wordscape</a>, my first collaborative group project was inspired by my little brother's dysgraphia. Tired of seeing him struggle to study his vocabulary words for school, I came up with an idea that would alleviate some of his stress.</p>
               
              </div>
            </div>

          </div>
          <div id="aboutInfo" className="col-md-4">
            <div id="aboutImage3" className="jumbotron jumbotron-fluid">
              <div className="container">
                <p className="lead"></p>
              </div>
            </div>
            <div id="cardTwo" className="card">
              <div className="card-body">
                <h5 className="card-title">La Tiendita</h5>
                <h6 className="card-subtitle mb-2 text-muted">The Little Store</h6>
                <p className="card-text">A snapshot of a small neighborhood store in Bolivia, where I did most of my growing-up. After school, my favoirte activity was to help cashier my grandpa's store. It's not on my resume but it was my first and favorite job.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

// function About() {
//   return (
//     <div id="aboutContainer">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4">
//           </div>
//           <div className="col-md-8">
//             <div className="card mb-3">
//               <div  className="row no-gutters">
//                 <div className="col-md-7">
//                   <div className="card-body">
//                     <h5 className="card-title">Card title</h5>
//                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                   </div>
//                 </div>
//                 <div  id="aboutImage"className="col-md-5">
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-8">
//             <div className="card mb-3">
//               <div className="row no-gutters">
//               <div id="aboutImage3" className="col-md-5">
//                 </div>
//                 <div className="col-md-7">
//                   <div id="cardTwo" className="card-body">
//                     <h5 className="card-title">Card title</h5>
//                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           </div>
//         <div className="row">
//           <div className="col-md-4">
//           </div>
//           <div className="col-md-8">
//             <div className="card mb-3">
//               <div className="row no-gutters">
//                 <div id="cardThree" className="col-md-7">
//                   <div className="card-body">
//                     <h5 className="card-title">Card title</h5>
//                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                   </div>
//                 </div>
//                 <div id="aboutImage2" className="col-md-5">
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default About;