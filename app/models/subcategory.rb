# == Schema Information
#
# Table name: subcategories
#
#  id          :integer          not null, primary key
#  name        :string
#  category_id :integer
#  rating      :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Subcategory < ApplicationRecord
  ratyrate_rateable 'score'
  belongs_to :category
end
