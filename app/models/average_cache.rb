# == Schema Information
#
# Table name: average_caches
#
#  id            :integer          not null, primary key
#  rater_id      :integer
#  rateable_type :string
#  rateable_id   :integer
#  avg           :float            not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
# Indexes
#
#  index_average_caches_on_rateable_type_and_rateable_id  (rateable_type,rateable_id)
#  index_average_caches_on_rater_id                       (rater_id)
#

class AverageCache < ActiveRecord::Base
  belongs_to :rater, :class_name => "User"
  belongs_to :rateable, :polymorphic => true
end
