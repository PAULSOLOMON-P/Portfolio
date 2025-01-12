import React from "react";
import "../Hero/Hero.css";
import Navbar from "../Nav/Navbar";
import About from "../About/About";
import Skills from "../Skills/Skills";

function Hero() {
  return (
    <>
    <Navbar/>
    <div className="home" id="home">
      <div className="nested-one">
        <div className="main-text">
          <h1 className="one">
            HELLO 
          </h1>
          <h1 className="two">I AM PAUL SOLOMON</h1>
          <h2 className="uppercase three">Python fullstack developer</h2>
        </div>
        <div className="home-buttons">
          <a href="#contact">
            <div className="primary-btn">
              <span>Hire me</span>
            </div>
          </a>
          <a href="#about">
            <div className="secondary-btn">
              <span>Get Resume</span>
            </div>
          </a>
        </div>
      </div>
      <div className="image-home">
        <img src="../img/home-right.png" className="home-img" />
      </div>
    </div>
    <About/>
    <Skills/>
    </>
  );
}

export default Hero;
