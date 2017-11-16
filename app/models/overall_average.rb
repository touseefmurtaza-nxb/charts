# == Schema Information
#
# Table name: overall_averages
#
#  id            :integer          not null, primary key
#  rateable_type :string
#  rateable_id   :integer
#  overall_avg   :float            not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
# Indexes
#
#  index_overall_averages_on_rateable_type_and_rateable_id  (rateable_type,rateable_id)
#

class OverallAverage < ActiveRecord::Base
  belongs_to :rateable, :polymorphic => true
end

