class Mountain < ApplicationRecord
    has_many :trails 
    has_many :users 
    has_many :comments, through: :users
end
