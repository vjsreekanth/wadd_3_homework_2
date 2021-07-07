import React, {useState, useEffect} from 'react';
import RecipeDetails  from './RecipeDetails';
import ReviewList from './ReviewList';
import {Recipe} from '../requests'
// import recipeData from '../data/recipeData';
const RecipeShowPage = props => {

  const [recipeShow, setRecipeShow] = useState({});


  const deleteRecipe = () => {
    Recipe.destroy(recipeShow.recipe.id).then(rec => {
      props.history.push("/recipes");
    });
  };


  useEffect(() => {
    Recipe.show(props.match.params.id).then(recipe => {
      setRecipeShow(recipe);
      console.log(recipe)
    });
  }, []);



        return(
        <main>

          <RecipeDetails  {...recipeShow}/>
          
       
          
        </main>
    )
  
  }
  

export default RecipeShowPage;

