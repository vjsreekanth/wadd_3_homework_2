import React, {Component} from 'react';
import WelcomePage from './components/WelcomePage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import RecipeShowPage from './components/RecipeShowPage';
import  RecipeIndexPage from './components/RecipeIndexPage'
import {User} from './requests';
import SignInPage from './components/SignInPage';
import Navbar from './components/Navbar';
import './App.css';



class App extends Component{
  constructor(props){
  super(props);
  this.state = {
    user: null
}}

componentDidMount(){
  this.getCurentUser()
}

getCurentUser = () => {
  return User.current().then(user =>{
    if(user?.id){
      this.setState(state =>{
        return {user}
      })
    }
  })
}


  render(){

    return (
      <div className="App">
        <BrowserRouter>
          <Navbar currentUser={this.state.user} />
          <Switch>
            <Route exact 
            path='/sign_in' 
            render={(routeProps) => <SignInPage {...routeProps} onSignIn={this.getCurentUser}/>}/>
            <Route exact path='/recipes' component={RecipeIndexPage} />
            <Route path='/recipes/:id' component={RecipeShowPage} />
            <Route exact path='/' component={WelcomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    )}
}

export default App;
