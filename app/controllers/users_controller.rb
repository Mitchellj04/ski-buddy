class UsersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable
    skip_before_action :authorized, only: :create

    def show 
        current_user = User.find_by(session[:user_id])
        if (current_user)
        render json: current_user, status: :accepted
        else 
        render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def create 
       user = User.create!(user_params)
       render json: user, status: :ok
    end

    private 

    def render_unprocessable(invalid)
        render json: {errors: invalid.record.errors}, stauts: 404
    end

    def user_params
        params.permit(:username, :password)
    end

end
