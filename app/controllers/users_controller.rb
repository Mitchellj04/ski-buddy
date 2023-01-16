class UsersController < ApplicationController
    wrap_parameters format: []
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable
    skip_before_action :authorize, only: :create

    def show 
        current_user = User.find(session[:id])
        render json: current_user
    end

    def create 
       user = User.create(user_params)
       if user.valid? 
        session[:user_id] = user.id
        render json: user 
       else 
        render json: {error: ["Please provide a correct username and password"]}, status: 422
       end
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


    def render_unprocessable(invalid)
        render json: {errors: invalid.record.errors.full_messages}, stauts: 422
    end
  

    def user_params
        params.permit(:username, :password, :name, :age, :bio, :experience_level)
    end

end
