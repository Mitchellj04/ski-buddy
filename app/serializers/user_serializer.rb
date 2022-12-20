class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :bio, :experience_level
end
