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

    # def groomed
    #     trails = ""
    #    trail_count = ""
    #    mountain = find_mountain
    #    trails = mountain.groomed_trails
    # #    mountain.each do |t|
    # #     trail_count = t.ticket_cost
    # #     trails = "#{trail_count} out of the #{t.trails.count} trails are open"
    # #    end
    #     render json: trails
    # end


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
