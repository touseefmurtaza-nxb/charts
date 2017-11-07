class UpdateCandidateTable < ActiveRecord::Migration[5.1]
  def change
    add_column :candidates, :f_name, :string
    add_column :candidates, :l_name, :string
    add_column :candidates, :address, :string
    add_column :candidates, :phone_no, :string

    add_attachment :candidates, :image

    remove_column :candidates, :name
  end
end
