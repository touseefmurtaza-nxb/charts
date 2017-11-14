class CreateSpecializations < ActiveRecord::Migration[5.1]
  def change
    create_table :specializations do |t|
      t.string :name
      t.string :description
      t.integer :candidate_id

      t.timestamps
    end
  end
end
