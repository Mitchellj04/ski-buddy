class CommentSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :rating, :user_id
end