class WorkExperience < ApplicationRecord
  belongs_to :candidate, inverse_of: :candidate
end
