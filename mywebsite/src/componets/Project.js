import React, { Component } from 'react'

export class Project extends Component {
  render() {
    return (
      <div className="project">
         <h4> Projects </h4> 
      
      <p>One of my ongoing  project</p>

     <a href="/"><img  src="./assets/images/project.PNG"    data-src="./assets/project.PNG"   data-hover="./assets/images/project-1.PNG"  className="img-responsive img_container" alt="project.PNG" />
      </a>
      </div>
    )
  }
}

export default Project
