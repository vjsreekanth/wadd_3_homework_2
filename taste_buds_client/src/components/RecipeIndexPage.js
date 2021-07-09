import React, {Component} from 'react';

import {Recipe} from '../requests'
import {Link} from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
            <CardDeck>
            <Row mx-md-n5>
                {this.state.recipes.map((recipe,index) => (

                    // <li style={{
                    //     marginTop: 20,
                    // }} key={recipe.id}>
                    //     <Link to={`/recipes/${recipe.id}`}>
                    //     <img src={recipe.image_url} alt={recipe.title} /></Link><br />
                    //     <p>{recipe.id} - {recipe.title}</p><br />
                    //     <small>Posted on: {recipe.created_at}</small><br />
                    //     <button onClick={() => this.deleteRecipe(recipe.id)}>Delete</button>
                    // </li>
            <Col className='mt-5 px-md-5'lg={4} md={6} xs={12}>
                <Card style={{ width: "auto"}} key={index}>
                    <Link to={`/recipes/${recipe.id}`}>
                    <Card.Img variant="top" src={recipe.image_url} alt={recipe.title} /></Link>
                    <Card.Body>
                        <Card.Title>{recipe.id} - {recipe.title}</Card.Title>
                        <Card.Text>
                        <small className="text-muted">Posted on: {recipe.created_at}</small>
                        </Card.Text><br />
                    </Card.Body>
                    <Button onClick={() => this.deleteRecipe(recipe.id)} variant="primary">Delete</Button><br />
                </Card>
                    
            </Col>
                ))}
            </Row>
           </CardDeck>
        </main>
    )}
}


export default RecipeIndexPage