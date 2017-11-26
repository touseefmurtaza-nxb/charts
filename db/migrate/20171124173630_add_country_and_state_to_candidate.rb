class AddCountryAndStateToCandidate < ActiveRecord::Migration[5.1]
  def change
    add_column :candidates, :country, :string
    add_column :candidates, :state, :string
  end
end
