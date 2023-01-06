class CommentSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :rating, :user_id, :mountain_id, :username

  def username
    self.object.user.username
  end
end
