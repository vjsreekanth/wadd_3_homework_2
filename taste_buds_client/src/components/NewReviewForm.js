 import React from 'react';
 

 const NewReviewForm = (props) =>{
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const review_params = {
            rating: formData.get('rating'),
            body: formData.get('body'),
            
        }
        props.createReview(review_params);

    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Review Your Experience</h1>
            <div>
                <label htmlFor="rating">Rating(1 - 5): </label>
                <input 
                name="rating" 
                id="rating" 
                />
               
            </div>
            <div>
                <label htmlFor="body">What You Think?</label>
                <br/>
                <input 
                name="body" 
                id="body" 
                />
                
            </div>
            <div>
                <input type="submit" value="Review"/>
            </div>
        </form>
    )
 }

 export default NewReviewForm