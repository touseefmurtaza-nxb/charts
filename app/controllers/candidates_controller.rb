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
    @work_experiences = @candidate.work_experiences.last(3)
    @educations = @candidate.educations.last(3)
    @tech_skills = @candidate.technical_skills.first(5)
    @specializations = @candidate.specializations.first(5)
  end

  # GET /candidates/new
  def new
    @candidate = Candidate.new
    @candidate.work_experiences.build
    @candidate.educations.build
    @candidate.languages.build
    @candidate.technical_skills.build
    @candidate.specializations.build
    @candidate.build_resume
  end

  # GET /candidates/1/edit
  def edit
  end

  # POST /candidates
  # POST /candidates.json
  def create
    @candidate = Candidate.new(candidate_params)
    if !params[:candidate][:resume].nil? and params[:candidate][:resume][:cv].present?
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
        if !params[:candidate][:resume].nil? and params[:candidate][:resume][:cv].present?
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
          # header_html = render_to_string( layout: 'pdf_header.html' )
          pdf  = CombinePDF.new
          pdf2 = render_to_string pdf: 'Assessment Report of #{@candidate.name}.pdf',
                                  template: 'candidates/report.pdf',
                                  layout: 'pdf_layout.html',
                                  encoding: 'UTF-8',
                                  javascript_delay: 5000
                                  # header: { content: header_html }

          resume = Resume.last.try(:cv).try(:path)
          pdf3 = CombinePDF.load(resume)
          a4_size = [0, 0, 595, 842]
          # keep aspect ratio intact
          pdf3.pages.each {|p| p.resize a4_size}
          # pdf3.save "a4.pdf"

          pdf << CombinePDF.new(pdf2)
          pdf << CombinePDF.new(pdf3.to_pdf)
          send_data pdf.to_pdf, :disposition => 'inline', :type => 'application/pdf'
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
      params.require(:candidate).permit(:f_name, :l_name, :address, :phone_no, :email, :interview_date, :image, :resume, work_experiences_attributes: [:id, :from_date, :to_date, :description, :_destroy], languages_attributes: [:id, :name, :level, :_destroy], educations_attributes: [:id, :from_date, :to_date, :description, :_destroy], technical_skills_attributes: [:id, :name, :_destroy], specializations_attributes: [:id, :name, :description, :_destroy], categories_attributes: [:id, :name, :rating, :_destroy, subcategories_attributes: [:id, :name, :rating, :_destroy]])
    end

    def resume_params
      params[:candidate][:resume][:cv]
    end
end
