import React from "react";
import "../../components/Skills/Skills.css";
import javascript from "../../assets/javascript.png";
import html from "../../assets/html-logo.webp";
import css from "../../assets/css.png";
import react from "../../assets/React.logo.webp";
import mysql from "../../assets/mysql.png";
import django from "../../assets/django.png";
import firebase from "../../assets/firebase.png";
import python from "../../assets/python.png";
import tailwind from "../../assets/tailwind.css.png";
import git from "../../assets/git.png";
import jquary from "../../assets/jquary.png";
import bootstarp from "../../assets/bootstarp.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const CustomArrow = ({ className, style, onClick, direction }) => (
  <div
    className={className}
    style={{
      ...style,
      backgroundColor: "#777777", 
      color: "black",            
      borderRadius: "50%",       
      width: "50px",            
      height: "50px",            
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
      zIndex: 10,
    }}
    onClick={onClick}
  >
    {direction === "left" ? "<" : ">"}
  </div>
);

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
  };

  return (
    <main id="skills">
      <div className="heading">
        <h1>SKILLS</h1>
        <p>
          Building robust, scalable web applications and seamless user
          experiences <br />
          using modern front-end and back-end technologies.
        </p>
      </div>
      <section>
        <div className="container" style={{
            width: "90%", 
            margin: "0 auto", 
          }}>
          <Slider {...settings}>
            {/* HTML Card */}
            <div className="card">
              <picture>
                <img src={html} alt="HTML Logo" />
              </picture>
              <div className="details">
                <h2>HTML</h2>
                <p>
                  HTML is the core language for structuring web content,
                  enabling the creation of well-organized and accessible
                  webpages.
                </p>
              </div>
            </div>

            {/* CSS Card */}
            <div className="card">
              <picture>
                <img src={css} alt="CSS Logo" />
              </picture>
              <div className="details">
                <h2>CSS</h2>
                <p>
                  CSS styles and designs web pages, controlling layout, colors,
                  and fonts for responsive and visually appealing interfaces.
                </p>
              </div>
            </div>

            {/* JavaScript Card */}
            <div className="card">
              <picture>
                <img src={javascript} alt="JavaScript Logo" />
              </picture>
              <div className="details">
                <h2>JavaScript</h2>
                <p>
                  JavaScript adds interactivity and dynamic functionality to web
                  pages, enhancing user engagement and experiences.
                </p>
              </div>
            </div>

            {/* React Card */}
            <div className="card">
              <picture>
                <img src={react} alt="React Logo" />
              </picture>
              <div className="details">
                <h2>React</h2>
                <p>
                  React.js is a powerful JavaScript library for building dynamic
                  user interfaces and creating reusable components for scalable
                  web applications.
                </p>
              </div>
            </div>

            {/* Python Card */}
            <div className="card">
              <picture>
                <img src={python} alt="Python Logo" />
              </picture>
              <div className="details">
                <h2>Python</h2>
                <p>
                  Python is a versatile programming language known for its
                  simplicity and effectiveness in developing both simple scripts
                  and complex systems.
                </p>
              </div>
            </div>

            {/* Django Card */}
            <div className="card">
              <picture>
                <img src={django} alt="Django Logo" />
              </picture>
              <div className="details">
                <h2>Django</h2>
                <p>
                  Django is a high-level Python web framework that encourages
                  rapid development and clean, pragmatic design for web
                  applications.
                </p>
              </div>
            </div>

            {/* Tailwind CSS Card */}
            <div className="card">
              <picture>
                <img src={tailwind} alt="Tailwind CSS Logo" />
              </picture>
              <div className="details">
                <h2>Tailwind CSS</h2>
                <p>
                  Tailwind CSS is a utility-first CSS framework for building
                  custom, responsive designs efficiently and quickly.
                </p>
              </div>
            </div>

            {/* jQuery Card */}
            <div className="card">
              <picture>
                <img src={jquary} alt="jQuery Logo" />
              </picture>
              <div className="details">
                <h2>jQuery</h2>
                <p>
                  jQuery simplifies HTML DOM manipulation, event handling, and
                  animations for efficient web development.
                </p>
              </div>
            </div>

            {/* MySQL Card */}
            <div className="card">
              <picture>
                <img src={mysql} alt="MySQL Logo" />
              </picture>
              <div className="details">
                <h2>MySQL</h2>
                <p>
                  MySQL is a popular relational database management system
                  widely used for data storage and retrieval in web
                  applications.
                </p>
              </div>
            </div>

            {/* Bootstrap Card */}
            <div className="card">
              <picture>
                <img src={bootstarp} alt="Bootstrap Logo" />
              </picture>
              <div className="details">
                <h2>Bootstrap</h2>
                <p>
                  Bootstrap is a front-end framework for designing responsive
                  and mobile-first web applications quickly.
                </p>
              </div>
            </div>

            {/* Git Card */}
            <div className="card">
              <picture>
                <img src={git} alt="Git Logo" />
              </picture>
              <div className="details">
                <h2>Git</h2>
                <p>
                  Git is a distributed version control system that helps
                  developers track changes in code and collaborate on projects.
                </p>
              </div>
            </div>

            {/* Firebase Card */}
            <div className="card">
              <picture>
                <img src={firebase} alt="Firebase Logo" />
              </picture>
              <div className="details">
                <h2>Firebase</h2>
                <p>
                  Firebase is a platform developed by Google for building
                  mobile and web applications with integrated tools for
                  analytics, databases, and authentication.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Skills;
