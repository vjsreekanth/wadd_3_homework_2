class Api::V1::ReviewsController < Api::ApplicationController
    def create
        @recipe = Recipe.find params[:recipe_id]
        review = Review.new review_params
        review.recipe = @recipe
        # @review.user = User.first
        if review.save
            render json:{id: review.id}
        else 
          render(json: {status: 422},
            status: 422 )
        end
      end
      
      def destroy
        @review= Review.find params[:id]
        if @review.destroy
        render(json: { status: 200 }, status: 200)
        else
          render(
              json: { status: 422 },
              status: 422,
          )
        end
      end
    
      private
    
      def review_params
        params.require(:review).permit(:body, :rating)
      end
end
