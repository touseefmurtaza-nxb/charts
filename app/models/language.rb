# == Schema Information
#
# Table name: languages
#
#  id           :integer          not null, primary key
#  name         :string
#  level        :string
#  candidate_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Language < ApplicationRecord
  belongs_to :candidate
end
