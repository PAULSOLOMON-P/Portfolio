import React from 'react'
import '../Project/Projects.css'
import youtube from '../../assets/project1.png'
import travel_web from '../../assets/project2.png'
import food_delivery from '../../assets/project3.png'
import gym_app from '../../assets/project4.png'
import Portfolio from '../../assets/project5.png'
import todo from '../../assets/project6.png'
import netflix from '../../assets/netflix-project.png'



function Projects() {
  return (
    <>
    <div className='projects' id='projects'>
        <div className='projects-container'>
            <div className='projects-heading'>
            <h1>quality work <br />
            Recently done project</h1>
            </div>
            <div className='project-card-alignments'>
            <div className='projects-card'>           
                  <img src={netflix} className='project-img'/> 
                <div className='project-content'>        
                <h2 className='project-title'>NETFLIX CLONE</h2>
                <h3 className='project-sec-title'>REACT.JS</h3> 
                <a href="https://github.com/PAULSOLOMON-P/Netflix-clone"><button className='primary-btn'>GITHUB LINK</button></a> 
                </div>          
            </div>

            <div className='projects-card'>
                <img src={gym_app} className='project-img'/>
                <div className='project-content'> 
                <h2 className='project-title'>gym workout app</h2>
                <h3 className='project-sec-title'>REACT.JS</h3> 
                <a href="https://github.com/PAULSOLOMON-P/Gym-workout-app"><button className='primary-btn'>GITHUB LINK</button></a> 
                </div>
            </div>

            <div className='projects-card'>
                <img src={food_delivery} className='project-img'/>
                <div className='project-content'> 
                <h2 className='project-title'>online food order website</h2>
                <h3 className='project-sec-title'>HTML & CSS</h3>  
                <a href="https://github.com/PAULSOLOMON-P/Food-delivery-website"><button className='primary-btn'>GITHUB LINK</button></a> 
                </div>
            </div>

            <div className='projects-card'>
                <img src={Portfolio} className='project-img'/>   
                <div className='project-content'>          
                <h2 className='project-title'>portfolio web-page</h2>
                <h3 className='project-sec-title'>REACT.JS</h3>  
                <a href="https://github.com/PAULSOLOMON-P/Portfolio"><button className='primary-btn'>GITHUB LINK</button></a> 
                </div>
            </div>

            <div className='projects-card'>
                <img src={travel_web} className='project-img'/>
                <div className='project-content'> 
                <h2 className='project-title'>travel booking website</h2>
                <h3 className='project-sec-title'>HTML & CSS</h3>  
                <a href=""><button className='primary-btn'>GITHUB LINK</button></a> 
                </div>
            </div>

            <div className='projects-card'>
                <img src={youtube} className='project-img'/>
                <div className='project-content'> 
                <h2 className='project-title'>YOUTUBE DASHBOARD</h2>
                <h3 className='project-sec-title'>HTML & CSS</h3>  
                <a href="https://github.com/PAULSOLOMON-P/Youtube-Dashboard"><button className='primary-btn'>GITHUB LINK</button></a> 
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Projects