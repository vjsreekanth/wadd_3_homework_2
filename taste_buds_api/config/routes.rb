Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :recipes, only: [:index, :show, :create, :destroy] do
        resources :reviews, shallow: :true, only: [:index, :create, :destroy]
      end 
      resource :session, only: [:create, :destroy]
      get("/current_user", to: "sessions#get_current_user")
      resources :users, only: [:create] do
        get :current, on: :collection # -> /api/v1/users/current
      end
      # resources :reviews, only: [:index]
 
    end
  end

end
