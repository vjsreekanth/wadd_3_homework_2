import React from 'react';

import FormErrors from './FormErrors';

const NewRecipeForm = (props) =>{

    const handleSubmit = (event) =>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const params = {
            image_url: formData.get('image_url'),
            title: formData.get('title'),
            description: formData.get('description'),
            story: formData.get('story'),
            serving_size: formData.get('serving_size'),
            is_spicy: formData.get('is_spicy'),
            is_sweet: formData.get('is_sweet'),
            is_salty: formData.get('is_salty')
        }
        props.createRecipe(params);

    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>New Recipe</h1>
            <div>
                <label htmlFor="image_url">Image -url-format</label>
                <br/>
                <input 
                name="image_url" 
                id="image_url" 
                />
                  <FormErrors forField="image_url" errors={props.errors}/>
            </div>
            <div>
                <label htmlFor="title">Title</label>
                <br/>
                <input 
                name="title" 
                id="title" 
                />
                  <FormErrors forField="title" errors={props.errors}/>
            </div>
            <div>
                <label htmlFor="story">Story</label>
                <br/>
                <input 
                name="story" 
                id="story" 
                />
               <FormErrors forField="story" errors={props.errors}/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <br/>
                <input 
                name="description" 
                id="description" 
                />
                 <FormErrors forField="description" errors={props.errors}/>
            </div>
            <div>
                <label htmlFor="serving_size">Number of people - serving size(1 - 50)</label>
                <br/>
                <input 
                name="serving_size" 
                id="serving_size" 
                />
                 <FormErrors forField="serving_size" errors={props.errors}/>
            </div>
            <div>
                <label htmlFor="is_spicy">Spicy</label>
                <input type="checkbox" id="is_spicy" name="is_spicy" value="True"></input>
            </div>
            <div>
                <label htmlFor="is_salty">Salty</label>
                <input type="checkbox" id="is_salty" name="is_salty" value="True"></input>
            </div>
            <div>
                <label htmlFor="is_sweet">Sweet</label>
                <input type="checkbox" id="is_sweet" name="is_sweet" value="True"></input>
            </div>
           
            <div>
                <input type="submit" value="Save"/>
            </div>
        </form>
    )
}
 

export default NewRecipeForm