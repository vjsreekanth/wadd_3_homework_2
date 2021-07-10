import React from 'react';
import WelcomeImg from './welcomeimg.jpg'

const WelcomePage = () => {
    return(
        <div>
            <h1>Welcome to Taste Buds</h1>
            <h3>Grab a buddy and cook together! Many quick and delicious recipes to choose from..</h3>
            <img src={WelcomeImg} alt="welcome" 
                style={{width:'100vw' }}
            />
        </div>
    )
};

export default  WelcomePage;
