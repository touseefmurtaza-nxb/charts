class CreateLanguages < ActiveRecord::Migration[5.1]
  def change
    create_table :languages do |t|
      t.string :name
      t.string :level
      t.integer :candidate_id

      t.timestamps
    end
  end
end
