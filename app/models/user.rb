class User < ApplicationRecord
    has_many :mountains, through: :comments 
    has_many :comments
    has_secure_password
end
