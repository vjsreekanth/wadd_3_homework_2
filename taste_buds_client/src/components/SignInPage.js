import Color from 'color';
import React from 'react'
import { Session } from '../requests'
import signin from "./images/signin.jpg";


function SignInPage(props){
  const {onSignIn} = props

   function handleSubmit(event){
    event.preventDefault();
    const {currentTarget} = event;
    const formData = new FormData(currentTarget)
    const params = {
      email: formData.get('email'),
      password: formData.get('password'),
    }

    
    
    Session.create(params).then(data => {
      if(data.id){
        onSignIn()
        props.history.push('/recipes')
      }
    })
      
  };

  return (
    <main style={{ backgroundImage: `url(${signin})`, height:'100vh'}}>
      <div className="container">
        <h1 style={{color: 'white'}}>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={{color: 'white'}}htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label style={{color: 'white'}} htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" />
          </div>
          <input type="submit" value="Sign In" />
        </form>
      </div>
   </main>
  )
}

export default SignInPage