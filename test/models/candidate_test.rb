# == Schema Information
#
# Table name: candidates
#
#  id                 :integer          not null, primary key
#  email              :string
#  interview_date     :datetime
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  f_name             :string
#  l_name             :string
#  address            :string
#  phone_no           :string
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

require 'test_helper'

class CandidateTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
