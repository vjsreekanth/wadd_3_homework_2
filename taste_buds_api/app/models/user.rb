class User < ApplicationRecord
      has_secure_password
      has_many :recipes, dependent: :destroy
      has_many :reviews, dependent: :destroy
      # Validations
      VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
      validates :first_name, :last_name, presence: true
      validates :email, presence: true, uniqueness: true, format: VALID_EMAIL_REGEX
  
      def full_name
          "#{first_name} #{last_name}".strip
      end
  
end
