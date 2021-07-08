import React from 'react';
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
            <NavLink to='/recipes'>Recipes</NavLink> -
            {currentUser ? ( 
                <React.Fragment>
                    <span>Welcome, {currentUser.full_name}</span>
                    <button onClick={handleSignOut}>Sign Out</button>
                </React.Fragment>
                    ) : (
                    <>
                        <NavLink to='/sign_in'>Sign In</NavLink>
                        - 
                        <NavLink to='/sign_up'>Sign Up</NavLink>
                    </>
                    )}
        </nav>
    )

    
    }
   

export default Navbar;