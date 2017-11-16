class CreateSubcategories < ActiveRecord::Migration[5.1]
  def change
    create_table :subcategories do |t|
      t.string :name
      t.integer :category_id
      t.integer :rating
      t.timestamps
    end
  end
end
