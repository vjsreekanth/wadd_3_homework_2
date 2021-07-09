import React from 'react';
import {NavLink} from 'react-router-dom';
import {Session} from '../requests';
import { useHistory } from 'react-router-dom';


const Navbar = ({ currentUser, onSignOut} ) => {

    const history = useHistory();
    
    const handleSignOut = () => {
        Session.destroy().then(() => {
            onSignOut()
            
             history.push("/")
        })
    }
    return(
        <nav>
            <NavLink to='/'>Home</NavLink> -
            <NavLink to='/recipes'>Recipes</NavLink> -
            {currentUser ? ( 
                <React.Fragment>
                    <NavLink to='/recipes/new'>New Recipes</NavLink>
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