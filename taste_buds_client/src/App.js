import React, {Component} from 'react';
import WelcomePage from './components/WelcomePage';
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom';
import RecipeShowPage from './components/RecipeShowPage';
import RecipeIndexPage from './components/RecipeIndexPage';
import {Session,User} from './requests';
import SignInPage from './components/SignInPage';
import Navbar from './components/Navbar';
import AuthRoute from './components/AuthRoute';
import SignUpPage from './components/SignUpPage';
import RecipeNewPage from './components/RecipeNewPage'


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
 onSignOut = (props) =>{
   
  Session.destroy().then((res) => {
    this.setState((state) => {
      return { user: null };
    });
  });

  

}


  render(){

    return (
      <div className="App">
        <BrowserRouter>
          <Navbar currentUser={this.state.user} onSignOut={this.onSignOut} />
          <Switch>
            <Route exact 
            path='/sign_in' 
            render={(routeProps) => <SignInPage {...routeProps} onSignIn={this.getCurentUser}/>}/>
            <Route exact path='/recipes' component={RecipeIndexPage} />
            <Route
            exact
            path='/sign_up'
            render={ (routeProps) => <SignUpPage {...routeProps} onSignUp={this.getCurentUser} />}/>
            <AuthRoute 
            isAuthenticated={!!this.state.user}
            exact
            path='/recipes/new'
            component={RecipeNewPage}
            />
            <Route path='/recipes/:id' component={RecipeShowPage} />
            <Route exact path='/' component={WelcomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    )}
}

export default App;
