import React, {Component} from 'react';
import WelcomePage from './components/WelcomePage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import RecipeShowPage from './components/RecipeShowPage';
import  RecipeIndexPage from './components/RecipeIndexPage'
import {Session, User} from './requests';
import Navbar from './components/Navbar';
import './App.css';



class App extends Component{
  constructor(props){
  super(props);
  this.state = {
    user: null
}}

componentDidMount(){
  Session.create({
    email: 'js@winterfell.gov',
    password: 'supersecret'
  }).then(user => {
    this.setState((state) => {
      return {
        user: user
      }
    })
  })
}


  render(){

    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/recipes' component={RecipeIndexPage} />
            <Route path='/recipes/:id' component={RecipeShowPage} />
            <Route exact path='/' component={WelcomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    )}
}

export default App;
