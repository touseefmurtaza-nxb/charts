# == Schema Information
#
# Table name: settings
#
#  id                :integer          not null, primary key
#  skill_matrix_type :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Setting < ApplicationRecord
end
