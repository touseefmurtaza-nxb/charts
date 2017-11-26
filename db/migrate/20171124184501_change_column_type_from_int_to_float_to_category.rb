class ChangeColumnTypeFromIntToFloatToCategory < ActiveRecord::Migration[5.1]
  def change
    change_column :categories, :rating, :float
  end
end
