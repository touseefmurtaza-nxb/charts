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

require 'test_helper'

class EducationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
