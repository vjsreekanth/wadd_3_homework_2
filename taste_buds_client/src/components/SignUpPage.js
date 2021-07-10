import React from 'react';
import { User } from '../requests';
import signup from "./images/signup.jpg";

const SignUpPage = (props) => {
    const { onSignUp } = props
    const handleSubmit = (event) => {
        const {currentTarget} = event
        event.preventDefault()
        const formData = new FormData(currentTarget)
        const params = {
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation'),
        }
        User.create(params).then(res => {
            if(res?.id){
                onSignUp() // Store user in App state

                props.history.push('/recipes') // Navigate to index page
            }
        })
    }
    return(
        <main style={{ backgroundImage: `url(${signup})`, height:'100vh'  }}>
            <h1 style={{color: 'white'}}>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={{color: 'white'}}htmlFor="first_name">First Name:</label>
                    <input type="text" name="first_name" id="first_name" />
                </div> 
                <div>
                    <label style={{color: 'white'}} htmlFor="last_name">Last Name: </label>
                    <input type="text" name="last_name" id="last_name" />
                </div> 
                <div>
                    <label style={{color: 'white'}}htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" />
                </div> 
                <div>
                    <label style={{color: 'white'}}htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" />
                </div> 
                <div>
                    <label style={{color: 'white'}}htmlFor="password_confirmation">Password Confirmation: </label>
                    <input type="password" name="password_confirmation" id="password_confirmation" />
                </div> 
                <input type="submit"  value="Sign Up" />               
            </form>
        </main>
    )
}


export default SignUpPage;