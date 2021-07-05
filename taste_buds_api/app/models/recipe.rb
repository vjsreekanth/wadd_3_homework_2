class Recipe < ApplicationRecord
    before_save :capitalize_title

    has_many :reviews, dependent: :destroy

    validates :title, presence: { message: "must have a title" }, uniqueness: true
    validates :description, presence: { message: "must include  description" }
    validates :serving_size, numericality: { in: 1..50 } 
    
    private

    def capitalize_title
        self.title.capitalize!
    end
end
