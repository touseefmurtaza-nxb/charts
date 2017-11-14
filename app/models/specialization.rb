# == Schema Information
#
# Table name: specializations
#
#  id           :integer          not null, primary key
#  name         :string
#  description  :string
#  candidate_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Specialization < ApplicationRecord
  belongs_to :candidate
end
