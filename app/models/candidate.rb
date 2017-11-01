# == Schema Information
#
# Table name: candidates
#
#  id             :integer          not null, primary key
#  name           :string
#  email          :string
#  interview_date :datetime
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Candidate < ApplicationRecord
  validates :interview_date, :email, :name, presence: true
  validates :email, uniqueness: true

  has_many :work_experiences, dependent: :destroy
  accepts_nested_attributes_for :work_experiences, reject_if: :all_blank, allow_destroy: true
end
