class CommentsController < ApplicationController

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def destroy
        comment = find_comment 
        comment.destroy
        head :no_content
    end

    def show 
        comment = find_comment
        if comment
        render json: comment
        else 
        render json: {errors: "Mountain could not be found."}, stauts: :not_found
        end
    end

    def update 
        comment = find_comment
        comment.update!(comment_params)
        render json: comment, status: :ok
    end


    private 

    def find_comment 
        Comment.find(params[:id])
    end

    def comment_params
        params.permit(:title, :description, :rating, :user_id, :mountain_id)
    end
end
