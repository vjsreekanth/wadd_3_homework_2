import React, {useState, useEffect} from 'react';
import RecipeDetails  from './RecipeDetails';
import ReviewList from './ReviewList';
import {Recipe, Review} from '../requests'
// import recipeData from '../data/recipeData';

export const RecipeShowContext = React.createContext(); 

const RecipeShowPage = props => {

  const [recipeShow, setRecipeShow] = useState({});


  

  // const createReview = (review_params, id) => {
  //   console.log (recipeShow.id)
  //   Review.create(review_params).then((review) => {
  //     if(review.errors){
  //     this.setState({errors: review.errors}) } else {this.props.history.push(`/recipes/${recipeShow.id}`);
  //   }});
  // }

  const deleteReview = id => {
    Review.destroy(id)
    setRecipeShow((state) => {
      const recipeCopy = JSON.parse(JSON.stringify(state));
      const newReviews = recipeCopy.reviews.filter((currentReview) => {
        return currentReview.id !== id;
      })
      recipeCopy.reviews = newReviews;
      return recipeCopy
    })
  };


  useEffect(() => {
    Recipe.show(props.match.params.id).then(recipe => {
      setRecipeShow(recipe);
      console.log(recipe)
    });
  }, []);



  const createReview = (review_params, id) => {
    Review.create(review_params, id)
      setRecipeShow((state) => {
        const recipeCopy = JSON.parse(JSON.stringify(state));
        const newReviews = recipeCopy.reviews.filter((review) => {
          return review.id !==1
        })
        recipeCopy.reviews = newReviews;
        return recipeCopy
      })
     
      
    
  }

 function handleSubmit (event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const review_params = {
        rating: formData.get('rating'),
        body: formData.get('body'),
        
    }
    const id = props.match.params.id
    console.log(id)
    console.log(review_params)
    createReview(review_params, id)
  }

        return(
        <main>


          <RecipeDetails  {...recipeShow}/>
        
          <form style={{marginTop: '20px', border: "5px solid grey", textAlign: 'center'}}onSubmit={handleSubmit}>
            <h1>Review Your Experience</h1>
            <div style={{textAlign: "centre"}}>
                <label htmlFor="rating">Rating(1 - 5): </label>
                <input 
                name="rating" 
                id="rating" 
                />
               
            </div>
            <div style={{textAlign: "centre"}}>
                <label htmlFor="body">What You Think? : </label>
              
                <input 
                name="body" 
                id="body" 
                />
                
            </div>
            <div style={{marginBottom: "20px"}}>
                <input type="submit" value="Review"/>
            </div>
        </form>
        
          <RecipeShowContext.Provider value={deleteReview}>
          {recipeShow && recipeShow.id && recipeShow.reviews?.length> 0 ?
          <ReviewList
          reviews={recipeShow?.reviews}
          onReviewDeleteClick={id => deleteReview(id)}
          /> : " "
          }
          </RecipeShowContext.Provider>
        </main>
    )
  
  }
  

export default RecipeShowPage;

