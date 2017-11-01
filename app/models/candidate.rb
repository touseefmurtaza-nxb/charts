class Candidate < ApplicationRecord
  validates :interview_date, :email, :name, presence: true
  validates :email, uniqueness: true

  has_many :work_experiences, inverse_of: :candidate, dependent: :destroy
  accepts_nested_attributes_for :work_experiences, reject_if: proc { |attributes| attributes[:from_date].blank? }, allow_destroy: true
end
