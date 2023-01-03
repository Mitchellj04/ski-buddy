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





    private 

    def find_comment 
        Comment.find(params[:id])
    end

    def comment_params
        params.permit(:title, :description, :rating, :user_id, :mountain_id)
    end
end
