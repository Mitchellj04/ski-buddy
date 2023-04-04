class MountainsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :mountain_error

    def index 
        mountain = Mountain.all
        render json: mountain, status: :ok
    end

    def show 
        mountain = find_mountain
        if mountain 
        render json: mountain 
        else 
        render json: {errors: "Mountain could not be found."}, stauts: :not_found
        end
    end

    def create 
        mountain = Mountain.create!(mountain_params)
        if mountain.valid? 
            render json: mountain, status: 200
        else
            render json: {errors: "Could not create mountain."}
        end
    end

    def trails 
        number = params[:number_of_trails]
        mountain = Mountain.all
        mountains = mountain.select { |i| i.number_trails > number.to_i}
        if mountains.length > 0 
        render json: mountains, status: 200
        else 
        render json: {errors: "No mountain found."}
        end

    end


    private 

    def mountain_error
        {errors: "Mountain Already exists"}
    end

    def find_mountain
        Mountain.find(params[:id])
    end

    def mountain_params 
        params.permit(:name, :number_trails, :number_lifts, :elevation, :image_url)
    end
end
