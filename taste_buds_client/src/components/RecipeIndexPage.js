import React, {Component} from 'react';

import {Recipe} from '../requests'


class  RecipeIndexPage extends Component{
    constructor(props){
        super(props);
        this.state = {recipes: []}
        this.createRecipe = this.createRecipe.bind(this)
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
    


    deleteReceipe(id){
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

                    <li key={recipe.id}>
                        <img src={recipe.image_url} alt={recipe.title} /><br />
                        <a href="#">{recipe.id} - {recipe.title}</a><br />
                        <small>Posted on: {recipe.created_at}</small><br />
                        <button onClick={() => this.deleteReceipe(recipe.id)}>Delete</button>
                    </li>
                    

                ))}
            </ul>
        </main>
    )}
}


export default RecipeIndexPage