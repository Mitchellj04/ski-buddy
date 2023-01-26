class UserSerializer < ActiveModel::Serializer
  attributes :id,:username, :name, :age, :bio, :experience_level
 
  has_many :mountains, through: :comments
  has_many :comments
end
