
import React from 'react';


const RecipeDetails = props => {
  console.log(props)

    return(
        <div>
        <img src={props.image_url} alt={props.title} />
        <h2>{props.title}</h2>
        <p
        style={{
          fontStyle: 'Roboto',
          fontSize: '12px'
          }}
        >{props.story}</p>

        <p
        style={{
          fontStyle: 'Roboto',
          fontSize: '12px'
          }}
        >{props.description}</p>
        <p>Serving Size {props.serving_size}</p>
       
        <div>
          <small
          style={{ marginLeft: '20px' }}
          >Posted on: {props.created_at}</small>
        </div>
      </div>

    )

}

export default RecipeDetails