class CandidatesController < ApplicationController
  before_action :set_candidate, only: [:show, :edit, :update, :destroy]

  # GET /candidates
  # GET /candidates.json
  def index
    @candidates = Candidate.all
  end

  # GET /candidates/1
  # GET /candidates/1.json
  def show
  end

  # GET /candidates/new
  def new
    @candidate = Candidate.new
  end

  # GET /candidates/1/edit
  def edit
  end

  # POST /candidates
  # POST /candidates.json
  def create
    @candidate = Candidate.new(candidate_params)
    respond_to do |format|
      if @candidate.save
        format.html { redirect_to @candidate, notice: 'Candidate was successfully created.' }
        format.json { render :show, status: :created, location: @candidate }
      else
        format.html { render :new }
        format.json { render json: @candidate.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /candidates/1
  # PATCH/PUT /candidates/1.json
  def update
    respond_to do |format|
      if @candidate.update(candidate_params)
        format.html { redirect_to @candidate, notice: 'Candidate was successfully updated.' }
        format.json { render :show, status: :ok, location: @candidate }
      else
        format.html { render :edit }
        format.json { render json: @candidate.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /candidates/1
  # DELETE /candidates/1.json
  def destroy
    @candidate.destroy
    respond_to do |format|
      format.html { redirect_to candidates_url, notice: 'Candidate was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def report
    respond_to do |format|
      format.html
      format.pdf do
        render pdf:          'file_name',
           show_as_html:     params.key?('debug'),
           layout:           'layouts/pdf.html.erb',
               :javascript_delay   => 1000,
               :disable_javascript => false,
               :dpi          => '100',
               font_name:       'Times New Roman',
               :margin       => {:top    => 30,
                                 :bottom => 10,
                                 :left   => 10,
                                 :right  => 10
               },
               :footer       => {
                   :margin    => {:top    => 30,
                                  :bottom => 10,
                                  :left   => 10,
                                  :right  => 10
                   },
                   :padding =>{

                   },
                   font_size: 8,
                   :line      => true,
                   :right     => ' Page [page] of [topage]', :left => "Print Date & Time: #{Time.now.strftime('%d/%m/%Y %I:%M %p')}", :center => "Top3DowntimeCauseInMinutes"
                   # }
               },

               show_as_html: false
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_candidate
      @candidate = Candidate.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def candidate_params
      params.require(:candidate).permit(:name, :email, :interview_date)
    end
end
