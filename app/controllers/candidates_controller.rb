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
    logger.info "Processing the request New..."
    @candidate = Candidate.new
    @candidate.work_experiences.build
    @candidate.build_resume
  end

  # GET /candidates/1/edit
  def edit
  end

  # POST /candidates
  # POST /candidates.json
  def create
    @candidate = Candidate.new(candidate_params)
    if params[:candidate][:resume][:cv].present?
      resume = @candidate.build_resume
      resume.cv = resume_params
      resume.save!
    end
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
        if params[:candidate][:resume][:cv].present?
          if @candidate.resume.nil?
            resume = @candidate.build_resume
            resume.cv = resume_params
            resume.save!
          else
            @candidate.resume.update(cv: resume_params)
          end
        end
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
          pdf = CombinePDF.new
          pdf2 = render_to_string pdf: "Report.pdf", template: "candidates/report.pdf", layout: 'pdf_layout.html', encoding: "UTF-8"
          pdf << CombinePDF.new(pdf2)
          pdf << CombinePDF.new(Resume.last.cv.path)
          send_data pdf.to_pdf, :disposition => 'inline', :type => "application/pdf"
        end
        # render :pdf             => 'Assessment Report',
        #    :show_as_html        => params.key?('debug'),
        #    :layout              => 'pdf_layout.html',
        #    :template            => 'candidates/report.pdf',
        #    :javascript_delay    => 1000,
        #    :disable_javascript  => false,
        #    :dpi                 => '100',
        #    :font_name           => 'Times New Roman',
        #    :header       => {:html    => {:template => 'layouts/pdf_header.html.erb',
        #                                   :locals   => {:comp_address => "350 G-III Johar Town Lahore", :web => "www.nextbridge.pk"}
        #                                  }
        #    }
      # end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_candidate
      @candidate = Candidate.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def candidate_params
      params.require(:candidate).permit(:name, :email, :interview_date, work_experiences_attributes: [:id, :from_date, :to_date, :description, :_destroy])
    end

    def resume_params
      params[:candidate][:resume][:cv]
    end
end
