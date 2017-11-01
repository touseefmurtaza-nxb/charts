class CreateWorkExperiences < ActiveRecord::Migration[5.1]
  def change
    create_table :work_experiences do |t|
      t.datetime :from_date
      t.datetime :to_date
      t.text :description
      t.integer :candidate_id

      t.timestamps
    end
  end
end
