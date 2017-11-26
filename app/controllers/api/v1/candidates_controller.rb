module Api::V1
  class CandidatesController < ApiController

    # POST /v1/candidates
    def create
      candidate = Candidate.new(f_name: params[:fname],l_name: params[:lname], email: params[:email], phone_no: params[:contact], country: params[:country], state: params[:state])
      if candidate.save
        skills = params[:skills]
        skills.each do |s|
          category = candidate.categories.find_or_create_by(:name => s.first.split('-').first)
          category.subcategories.create(:name => s.first.split('-').last, :rating => s.last.to_i)
          candidate.reload
        end
        create_series(candidate)
        render json: { success: true }
      else
        render json: { success: false, :errors => candidate.errors.messages }
      end
    end

    def create_series(candidate)
      candidate.categories.each do |cat|
        calculate_rating(cat)
      end
    end

    def calculate_rating(cat)
      subcat_array = []
      cat.subcategories.each do |subcat|
        subcat_array << (subcat.rating.to_f/5.0)
      end
      category_rating = (subcat_array.sum.to_f)/(cat.subcategories.count.to_f)
      cat.rating = category_rating
      cat.save!
    end

  end
end