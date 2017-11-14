# == Schema Information
#
# Table name: technical_skills
#
#  id           :integer          not null, primary key
#  name         :string
#  candidate_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class TechnicalSkill < ApplicationRecord
  belongs_to :candidate
end
