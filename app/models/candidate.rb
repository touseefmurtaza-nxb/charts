class Candidate < ApplicationRecord
  validates :interview_date, :email, :name, presence: true
  validates :email, uniqueness: true
end
