import React from 'react';
import NewRecipeForm from './NewRecipeForm'
import {Recipe} from '../requests'

const RecipeNewPage = (props) => {
    // Because NewQuestionPage is being rendered by a Route component provided by React-Router-Dom
    // it will receive the history, location and match properties
    function createRecipe(params) {
        Recipe.create(params)
        .then((recipe) => {
            const id = recipe.id;
            // the history prop contains methods used to navigate
            props.history.push(`/recipes/${id}`);
        })
    }
    return(
        <div>
            <NewRecipeForm createRecipe={createRecipe}/>
        </div>
    )
}


export default RecipeNewPage; 