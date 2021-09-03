import React from 'react'
import { NavLink } from 'react-router-dom';
import './Style.css'

function NavMenu(){

    return(
       
       <div className="NavMenustyle">

            <ul>    
                <li >
                    <NavLink to="/" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/About">About</NavLink>
                </li>
                <li>
                    <NavLink to="/Project">Project</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
            </ul>
            
        </div>
    );
}

export default NavMenu