import React from 'react'
import {SwitchTransition , CSSTransition} from 'react-transition-group'

function Testimonalsection(){
    return(
     <div>
         <div className="Testimonal">
             <h1>Testimonal Section</h1>
         </div>

       <div>
         <SwitchTransition>
             <CSSTransition   timeout={200}>
                   <div className="Testimonalinfo">
                       <p className="testimonaltext">
                           Iam chandru , this is my testimoanl section ,
                           so i need to tesxt some lines about testimonal section 

                       </p>
                       <p>SHARATH<span>CEO:AMAZON</span></p>
                       
                  </div>
             </CSSTransition>
         </SwitchTransition>
        </div>  
     </div>
    );
}


export default Testimonalsection