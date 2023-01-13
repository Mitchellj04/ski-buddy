class User < ApplicationRecord
    has_many :mountains, through: :comments 
    has_many :comments
    has_secure_password
    validates :username, presence: true 
    validates :name, presence: true 
    # validates :password, presence: true
    # validates :password, length {in: 6..20} 
end
