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
  PRIORITIES = {
      :mothertongue => 3,
      :fluent  => 2,
      :good  => 1,
      :notions  => 0
  }

  def <=> (other)
    PRIORITIES[self.priority] <=> PRIORITIES[other.priority]
  end

  LEVELS = {"MOTHERTONGUE" => "mothertongue",
            "FLUENT" => "fluent",
            "GOOD" => "good",
            "NOTIONS" => "notions"
           }

  NAMES = {"ENGLISH" => "english",
            "PERSIAN" => "persian",
            "URDU" => "urdu",
            "PUNJABI" => "punjabi"
  }

  LEVEL_RANK = {
      "mothertongue" => "3",
      "fluent" => "2",
      "good" => "1",
      "notions" => "0",
  }
end
