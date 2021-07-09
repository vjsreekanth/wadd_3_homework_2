
import React from 'react';
import spicy from  './spicy.png';
import falsy from './falsy.png';
import salty from './salty.png';
import sweet from './sweet.png'


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
          <div className="levels">
            <span>Is Spicy: </span>{props.is_spicy === true ? <img src={spicy} alt="spicy" /> : <img src={falsy} alt="falsy" />}
          </div>
          <div className="levels">
            <span>Is Sweet: </span>{props.is_sweet === true ? <img src={sweet} alt="spicy" /> : <img src={falsy} alt="falsy" />}
          </div>
          <div className="levels">
          <span>Is Salty: </span>{props.is_salty === true ? <img src={salty} alt="spicy" /> : <img src={falsy} alt="falsy" />}
          </div><br />
       
       
        <div>
          <small
          style={{ marginLeft: '20px' }}
          >Posted on: {props.created_at}</small>
        </div>
      </div>

    )

}

export default RecipeDetails