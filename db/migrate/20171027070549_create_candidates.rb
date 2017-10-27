class CreateCandidates < ActiveRecord::Migration[5.1]
  def change
    create_table :candidates do |t|
      t.string :name
      t.string :email
      t.datetime :interview_date

      t.timestamps
    end
  end
end
