import React from 'react'
import {SwitchTransition,CSSTransition} from 'react-transition-group'

function Testimonalsection(){
    return(
     <div>
         <div class="Testimonal">
             <h1>Testimonal Section</h1>
         </div>

       <div>
         <SwitchTransition>
             <CSSTransition>
                   <div Testimonalinfo>
                       <p class="testimonaltext">
                           Iam chandru , this is my testimoanl section ,
                           so i need to tesxt some lines about testimonal section 

                           <p>SHARATH<span>CEO:AMAZON</span></p>
                           
                       </p>
                       
                  </div>
             </CSSTransition>
         </SwitchTransition>
        </div>  
     </div>
    );
}


export default Testimonalsection