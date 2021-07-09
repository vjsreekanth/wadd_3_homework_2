import React, { Component } from "react";
import NewRecipeForm from './NewRecipeForm'
import { Recipe } from "../requests";
import newrecipe from './images/newrecipe.jpg'
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
      <main style={{ backgroundImage: `url(${newrecipe})`, width:'100vw'  }}>
        <NewRecipeForm
          createRecipe={this.createRecipe}
          errors={this.state.errors}
        />
      </main>
    );
  }
}

export default RecipeNewPage;