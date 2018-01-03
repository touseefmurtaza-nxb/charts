# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create Default Skill Matrix Chart Type
setting = Setting.new(skill_matrix_type: SKILL_MATRIX_CHART_TYPE[0])
if setting.save
  setting.reload
  p "Default chart type for Skill Matrix is #{setting.skill_matrix_type}"
else
  p "There is an issue in generating settings."
end