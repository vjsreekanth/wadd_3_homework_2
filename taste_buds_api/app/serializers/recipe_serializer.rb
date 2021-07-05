class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :title, :story, :description, :is_salty, :is_spicy, :is_sweet, :created_at, :updated_at


  has_many :reviews

  class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :body, :rating, :created_at, :updated_at
  end
  

end
