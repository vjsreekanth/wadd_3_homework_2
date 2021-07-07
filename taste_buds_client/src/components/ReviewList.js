import React from 'react';
import ReviewDetails from './ReviewDetails';
// import reviews from '../data/reviews.js'

const  ReviewList =  ({props, deleteReview}) =>{
    const reviews = props.reviews
    

    return(
        <div>{ reviews? 
            reviews.map( ({ body, rating, reviewer, created_at, id}) => (
                
                    <ReviewDetails 
                    key={id}
                    id={id}
                    body={body}
                    rating={rating}
                    reviewer={reviewer}
                    created_at={created_at.toLocaleString()}
                    deleteReview = {deleteReview}
                    
                    />
                
                
                ))
                : null

        }
        
        </div>
    )
}

    



export default ReviewList