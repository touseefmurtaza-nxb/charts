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

require 'test_helper'

class CandidateTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
