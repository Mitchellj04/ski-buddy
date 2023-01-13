class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable
    before_action :authorize

    def authorize
      @current_user = User.find_by(id: session[:user_id])
      render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? @current_user
    end
  
    private 

    def render_unprocessable(invalid)
      render json: {errors: invalid.record.errors.full_messages}, stauts: 404
    end


end
