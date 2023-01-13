class UsersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorize, only: :create

    def show 

        render json: @current_user
    end

    def create 
       user = User.create!(user_params)
       session[:user_id] = user.id
       render json: user, status: :ok
    end

    def update 
        user = @current_user
        user.update!(user_params)
        render json: user, status: :ok
    end

    private 

    def find_user 
        user.find(params[:id])
    end

    def user_params
        params.permit(:username, :password, :name, :age, :bio, :experience_level)
    end

end
