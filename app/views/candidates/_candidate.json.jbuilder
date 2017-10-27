json.extract! candidate, :id, :name, :email, :interview_date, :created_at, :updated_at
json.url candidate_url(candidate, format: :json)
