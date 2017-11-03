# == Schema Information
#
# Table name: resumes
#
#  id              :integer          not null, primary key
#  cv_file_name    :string
#  cv_content_type :string
#  cv_file_size    :integer
#  cv_updated_at   :datetime
#  candidate_id    :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Resume < ApplicationRecord
  belongs_to :candidate
  has_attached_file :cv
  validates_attachment :cv, content_type: { content_type: "application/pdf" }
end
