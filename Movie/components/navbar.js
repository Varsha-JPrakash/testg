import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';


const Navbar=()=>{

    
    return(
        <nav>
        
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/main'>Admin</NavLink>
            <NavLink to='/customer' >Movies List</NavLink>
            
           
        </nav>
    )
}

export default Navbar