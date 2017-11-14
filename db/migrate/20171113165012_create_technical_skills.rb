class CreateTechnicalSkills < ActiveRecord::Migration[5.1]
  def change
    create_table :technical_skills do |t|
      t.string :name
      t.integer :candidate_id

      t.timestamps
    end
  end
end
