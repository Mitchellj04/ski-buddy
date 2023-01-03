class UserSerializer < ActiveModel::Serializer
  attributes :id,:username, :name, :age, :bio 
  # :experience_level
end
