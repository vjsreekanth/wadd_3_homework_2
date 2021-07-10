import React, { Component } from "react";
import NewRecipeForm from './NewRecipeForm'
import { Recipe } from "../requests";
import newrecipe1 from './images/newrecipe1.jpg'
class RecipeNewPage extends Component {
  constructor(props) {
    super(props);
         this.state = { errors: []}
    ;
    this.createRecipe = this.createRecipe.bind(this);
  }
  createRecipe(params) {
    Recipe.create(params).then((recipe) => {
      if(recipe.errors){
      this.setState({errors: recipe.errors}) } else {this.props.history.push(`/recipes/${recipe.id}`);
    }});
  }

  render() {
    return (
      <main style={{ backgroundImage: `url(${newrecipe1})`,height:'100vh'}}>
        <NewRecipeForm
          createRecipe={this.createRecipe}
          errors={this.state.errors}
        />
      </main>
    );
  }
}

export default RecipeNewPage;