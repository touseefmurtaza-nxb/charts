class CreateSettings < ActiveRecord::Migration[5.1]
  def change
    create_table :settings do |t|
      t.string :skill_matrix_type

      t.timestamps
    end
  end
end
