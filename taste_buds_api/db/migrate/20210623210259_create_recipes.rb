class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :image_url
      t.string :title
      t.string :story
      t.text :description
      t.integer :serving_size
      t.boolean :is_spicy, default: false
      t.boolean :is_salty, default: false
      t.boolean :is_sweet, default: false

      t.timestamps
    end
  end
end
