class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :serving_size, :title, :story, :description, :is_salty, :is_spicy, :is_sweet, :created_at, :updated_at

  belongs_to :user, key: :author
  has_many :reviews

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :full_name, :created_at, :updated_at
  end

  class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :body, :rating, :created_at, :updated_at, :reviewer, :reviewer_id

    def reviewer
      object.user&.full_name
    end

    def reviewer_id
      object.user&.id
    end
  end
  

end
