class UsersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable
    skip_before_action :authorize, only: :create

    def show 
        render json: @current_user, status: :accepted
    end

    def create 
       user = User.create!(user_params)
       render json: user, status: :ok
    end

    def update 
        user = @current_user
        user.update!(user_params)
        render json: user, status: :ok
    end

    private 

    def render_unprocessable(invalid)
        render json: {errors: invalid.record.errors}, stauts: 404
    end

    def find_user 
        user.find(params[:id])
    end

    def user_params
        params.permit(:username, :password, :name, :age)
    end

end
