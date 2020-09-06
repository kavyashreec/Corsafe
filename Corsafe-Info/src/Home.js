import React,{useEffect} from "react";
import Portfolio from "./Portfolio";
import Navbar from "./Navbar";
import Decrypt from "./Decrypt";
import Mask from './assets/img/Mask.jpg';
import distance from './assets/img/distance.jpg';
import Handwashing from './assets/img/Handwashing.jpg';
import cough from './assets/img/cough.jpg';
import Touch from './assets/img/Touch.jpg';
import sanitize from './assets/img/sanitize.jpg';
import "./App.css";

function Home() {
  
  const portfolioLinks = [
    {
      title: "Wear mask and ensure no spreading of corona virus",
      img_add:Mask,
    },
    {
      title: "Always use napkine while sneezing or coughing",
      img_add:cough,

    },
    {
      title: "Maintain 6 feet distance with people",
      img_add:distance,

    },
    {
      title: "Sanitize and disinfect frequently",
      img_add:sanitize,

    },
    {
      title: "Wash your hands at regular intervals",
      img_add:Handwashing,
    },
    {
      title: "Do not touch your face before sanitizing your hands",
      img_add:Touch,

    },
  ];
  return (
    <div>
      <div className="App">
        <Navbar />

        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in mastslog">
                <Decrypt />
              </div>
              <div className="intro-heading text-uppercase">
               <h3 className="mastname" >CorSafe</h3>
              </div>
            </div>
          </div>
        </header>
        <div className="bgm">
        <Portfolio portfolioLinks={portfolioLinks}></Portfolio>        
      </div>
      </div>
    </div>
  );
}

export default Home
