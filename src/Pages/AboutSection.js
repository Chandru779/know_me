import React from 'react'
import { Link } from 'react-router-dom';
import chandu1 from './Images/chandu1.jpeg'

function AboutSection(){
    return(
        <div class="AboutSection">
            <div>
                <p>About Me</p>
                  <div class="Aboutpara">
                   <p>Iam Website Designer and Developer from Banglore Karnataka India ,
                   love to Create websites and learning BackEnd side , I want to showup a unique </p>
                 </div>
            </div>

            <div>
              <Link class="btnWorks" to="./Project">Works</Link>

              <Link class="btnRead" to="./About">Read More</Link>
            </div>

             <div>
                <img src={chandu1} alt="chandu1" height="300px" width="400px" class="chandu1img"/>
             </div>
            

        </div>

    );
}

export default AboutSection