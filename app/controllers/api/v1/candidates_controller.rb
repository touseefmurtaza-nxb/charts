module Api::V1
  class CandidatesController < ApiController

    # POST /v1/events
    def create
      render json: params.to_json
    end

  end
end