class User < ApplicationRecord
    has_many :comments
    has_many :mountains, through: :comments 
    has_secure_password
    validates :username, presence: true 
    validates :name, presence: true 
    validates :password, presence: true
    validates :age, numericality: true 
end
