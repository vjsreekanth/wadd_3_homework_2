import React from 'react';
import ReviewDetails from './ReviewDetails';

// import reviews from '../data/reviews.js'

const ReviewList = (props = {})=> {
    const { reviews, onReviewDeleteClick = () => {} } = props;

    return (
        
        <div>
            <h3>Previous Reviews</h3>
          {reviews?reviews.map((review,i) => {
            return <ReviewDetails
                key={i}
                rating={review.rating}
                id={review.id}
                body={review.body}
                reviewerName={review.reviewer?review.reviewer:''}
                createdAt={review.created_at}
                onDeleteClick={onReviewDeleteClick}
              />
            
          }):''}
        </div>
      )}

    



export default ReviewList