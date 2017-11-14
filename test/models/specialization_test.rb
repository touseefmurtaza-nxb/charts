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

require 'test_helper'

class SpecializationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
