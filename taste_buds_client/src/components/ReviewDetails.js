import React from 'react';

const ReviewDetails = ({ body, rating, reviewer, created_at, id, deleteReview }) => {
    return(
        <div>
            <p
            style={{
            fontStyle: 'Roboto',
            fontSize: '12px'
            }}
            >{rating}</p>
            
            <p
            style={{
            fontStyle: 'Roboto',
            fontSize: '12px'
            }}
            >{body}</p>
            <div>
            <small style={{ marginLeft: '20px'}}>Reviewed on  {created_at}</small> -
            <small>By {reviewer? reviewer : null}</small><br />
            <button onClick={() => deleteReview(id)}>Delete</button>
            <br />
            </div>
      </div>
        
    )
}

export default ReviewDetails