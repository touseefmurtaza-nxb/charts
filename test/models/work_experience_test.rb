# == Schema Information
#
# Table name: work_experiences
#
#  id           :integer          not null, primary key
#  from_date    :datetime
#  to_date      :datetime
#  description  :text
#  candidate_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class WorkExperienceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
