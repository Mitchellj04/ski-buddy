class MountainsController < ApplicationController

    def index 
        mountain = Mountain.all
        render json: mountain, status: :ok
    end

    def show 
        mountain = Mountain.find(params[:id])
        if mountain 
        render json: mountain 
        else 
        render json: {errors: "Mountain could not be found."}, stauts: :not_found
        end
    end


    private 

    def mountain_params 
        params.permit()
    end
end
