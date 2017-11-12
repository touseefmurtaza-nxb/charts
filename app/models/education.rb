# == Schema Information
#
# Table name: educations
#
#  id           :integer          not null, primary key
#  from_date    :datetime
#  to_date      :datetime
#  description  :text
#  candidate_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Education < ApplicationRecord
  belongs_to :candidate
end
