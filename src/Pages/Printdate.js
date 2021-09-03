import React from 'react';
import './Date.css';

function Printdate(){
   
    const date = new Date();
    
     var displaytime = date.getHours() + ":" + date.getMinutes();

     const currentTime = date.getHours();
   
    let message;

    if(currentTime < 12){
        message = "Good Morning";

    }
    else if(currentTime < 18){
        message = "Good Afternoon -"
    }
    else{
        message = "Good Evening -"
    }

    console.log(message);

    return(
        <div className="dateset">
           
           <ul className="dateul">
             <li>{message} </li>
             <li>{displaytime}</li>
           </ul>
        </div>
    );
}

export default Printdate