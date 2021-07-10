class Api::V1::RecipesController < Api::ApplicationController
    before_action :authenticate_user!, only: [:create, :destroy]

    def index
        recipes = Recipe.order created_at: :desc
        render json: recipes, each_serializer: RecipeSerializer
    end

    def show
        @recipe = Recipe.find params[:id]
        render json: @recipe
    end
   
    def create
        recipe = Recipe.new recipe_params
        recipe.user = current_user
        if recipe.save
            render json:{id: recipe.id}
        else
            render(json: {status: 422},
                status: 422 )
        end
    end

    def destroy
        @recipe = Recipe.find params[:id]
        if @recipe.destroy
            render(json: { status: 200 }, status: 200)
        else
            render(
                json: { status: 422 },
                status: 422,
              )
        end
    end

    private

        def find_recipe
            @recipe = Recipe.find params[:id]
        end

        def recipe_params
            params.require(:recipe).permit(:image_url, :title, :story, :description, :serving_size, :is_salty, :is_spicy, :is_sweet)
        end
end
