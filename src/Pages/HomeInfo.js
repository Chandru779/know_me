import React from 'react'
import chandu2 from './Images/chandu2.jpeg'

function HomeInfo(){
    return(
          <div class="home-info">
              <div>
                  <div class="intro">
                   <p>Hello this is, <span> Chandru Angadi</span></p>
                  </div>

                  <img src={chandu2} alt="chandu2" height="600px" width="750px" class="chandu2img"/>
              </div>
          </div>
    );
}

export default HomeInfo