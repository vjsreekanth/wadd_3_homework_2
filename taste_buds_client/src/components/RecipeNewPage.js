import React, { Component } from "react";
import NewRecipeForm from './NewRecipeForm'
import { Recipe } from "../requests";
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
      <main>
        <NewRecipeForm
          createRecipe={this.createRecipe}
          errors={this.state.errors}
        />
      </main>
    );
  }
}

export default RecipeNewPage;