import React from 'react';
import { StarRating } from "./StarRating";
import { RecipeShowContext } from "./RecipeShowPage";
import { useContext } from "react";

const ReviewDetails = (props) => {
    const deleteReview = useContext(RecipeShowContext)
    console.log(props)
    return(
        <div>
            <h3 className="header">
                <StarRating max={5} currentNumber={props.rating} />
            </h3>
            <p>{props.body}</p>
            <p>Reviewed by: {props.reviewerName ? props.reviewerName : null}</p>
            <p>createdAt: {new Date(props.createdAt).toDateString()}</p>{" "}
            <button onClick={() => deleteReview(props.id)}>Delete</button>
        </div>
    )
}

export default ReviewDetails