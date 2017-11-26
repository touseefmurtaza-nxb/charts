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
#  country            :string
#  state              :string
#

class Candidate < ApplicationRecord
  # validates :interview_date, :email, :f_name, :l_name, :address, :phone_no, presence: true
  validates :email, uniqueness: true

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/assets/images/missing.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_many :work_experiences, dependent: :destroy
  has_many :educations, dependent: :destroy
  has_many :languages, dependent: :destroy
  has_many :technical_skills, dependent: :destroy
  has_many :specializations, dependent: :destroy
  has_many :categories, dependent: :destroy

  accepts_nested_attributes_for :work_experiences, reject_if: :all_blank, allow_destroy: true
  accepts_nested_attributes_for :educations, reject_if: :all_blank, allow_destroy: true
  accepts_nested_attributes_for :languages, reject_if: :all_blank, allow_destroy: true
  accepts_nested_attributes_for :technical_skills, reject_if: :all_blank, allow_destroy: true
  accepts_nested_attributes_for :specializations, reject_if: :all_blank, allow_destroy: true
  accepts_nested_attributes_for :categories, reject_if: :all_blank, allow_destroy: true

  has_one :resume

  def name
    "#{f_name} #{l_name}"
  end

  def address
    "#{state}, #{country}"
  end
end
