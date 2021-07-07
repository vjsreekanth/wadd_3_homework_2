import React from 'react';
import WelcomePage from './WelcomePage';
import {NavLink} from 'react-router-dom';
import {Session} from '../requests';


const Navbar = ({ currentUser, onSignOut} ) => {
    
    const handleSignOut = () => {
        Session.destroy().then(() => {
            onSignOut()
        })
    }
    return(
        <nav>
            <NavLink to='/'>Home</NavLink> -
            <NavLink to='/recipes'>Recipes</NavLink>
        
            
        </nav>
    )

    
    }
   

export default Navbar;