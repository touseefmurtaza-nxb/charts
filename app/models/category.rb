# == Schema Information
#
# Table name: categories
#
#  id           :integer          not null, primary key
#  name         :string
#  candidate_id :integer
#  rating       :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Category < ApplicationRecord
  has_many :subcategories, dependent: :destroy
  accepts_nested_attributes_for :subcategories, reject_if: :all_blank, allow_destroy: true
  belongs_to :candidate
end
