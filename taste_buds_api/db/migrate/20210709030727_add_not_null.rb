class AddNotNull < ActiveRecord::Migration[6.1]
  def change
    change_column_null :recipes, :is_salty, false
    change_column_null :recipes, :is_spicy, false
    change_column_null :recipes, :is_sweet, false
  end
end
