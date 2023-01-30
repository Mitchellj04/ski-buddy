class TrailsController < ApplicationController
    skip_before_action :authorize, only: :create 

    def index 
        trails = Trail.all 
        render json: trails 
    end

    def create 
        trails = Trail.create!(trail_params)
        if trails.valid?
        render json: trails
        else 
        render json: {errors: invalid.record.errors.full_messages}
        end
    end

    private 

    def trail_params
        params.permit(:trail_name, :difficulty, :groomed, :mountain_id)
    end
end
