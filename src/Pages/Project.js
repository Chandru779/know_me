import React from 'react';
import imageUI from './Images/imageUI.jpg'
import calculator from './Images/calculator.jpg'

function Project(){
    return(
        <div className="project-page">
            <div className="project-inside">
                <div className="project_1">
                  <h1>Projects</h1>
                  <a href="" ><img src={imageUI} alt="imageUI" height="250px" width="250px" className="imageUI" /></a>
                  <p>This is Simple UI Page</p>
                  <a href="" ><img src={calculator} alt="imageUI" height="250px" width="250px" className="calculator"/></a>
                  <p>This is Simple Calculator</p>


                </div>

            </div>
        </div>
    );
}

export default Project