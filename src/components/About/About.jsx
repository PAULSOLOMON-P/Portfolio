import React from "react";
import "../About/About.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <div className="about-img">
          <img src="../img/about-us.png" />
        </div>
        <div className="about-text">
          <div className="about-heading">
            <h1 className="uppercase">
              let's <br />
              Introduce about <br />
              myself
            </h1>
            <p>
              Here's the updated paragraph tailored for a Python full-stack
              developer: --- "As a dedicated and enthusiastic Python full-stack
              developer with a background in commerce, I bring a unique
              perspective to building robust, user-centric web applications.
              Proficient in HTML, CSS, JavaScript, jQuery, Python, Django,
              MySQL, and Tailwind CSS, I am passionate about designing and
              developing functional, scalable, and visually appealing digital
              solutions. With a strong foundation in both front-end and back-end
              technologies, I am eager to contribute to innovative projects,
              solve complex challenges, and grow in the ever-evolving field of
              web development."
            </p>
          </div>
          <div className="about-btn">
            <a href="../img/portfolio-resume.pdf" download="Resume">
              <span className="uppercase">Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
