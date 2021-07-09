import React, {Component} from 'react';

import {Recipe} from '../requests'
import {Link} from 'react-router-dom'


class  RecipeIndexPage extends Component{
    constructor(props){
        super(props);
        this.state = {recipes: []}
        this.createRecipe = this.createRecipe.bind(this)
        this.deleteRecipe = this.deleteRecipe.bind(this)
    }

    componentDidMount(){
        Recipe.index().then((recipes) => {
            this.setState((state) =>{
                return{
                    recipes: recipes
                }
            })
        })
    }

    createRecipe(params){
            this.setState((state) => {
                return {
                    recipes: [ // array of questions
                        ...state.recipes,
                        {
                            //Then copy the previous list of questions from our state into this new array
                            // following the newly created question
                            id: Math.max(...state.recipes.map(r => r.id)) + 1, // array of all the question ids
                            ...params // params of the question form
                        }
                    ]
                }
            })}
    

           
    deleteRecipe(id){
        Recipe.destroy(id);
        this.setState((state) => {
            return {
                recipes: state.recipes.filter(recipe => recipe.id !== id)
            }
        })
    }

    render(){
        return(
        <main>
            <h1>Recipes</h1>
            <ul style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                }}>
                {this.state.recipes.map(recipe => (

                    <li style={{
                        marginTop: 20,
                    }} key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>
                        <img src={recipe.image_url} alt={recipe.title} /></Link><br />
                        <p>{recipe.id} - {recipe.title}</p><br />
                        <small>Posted on: {recipe.created_at}</small><br />
                        <button onClick={() => this.deleteRecipe(recipe.id)}>Delete</button>
                    </li>
                    

                ))}
            </ul>
        </main>
    )}
}


export default RecipeIndexPage