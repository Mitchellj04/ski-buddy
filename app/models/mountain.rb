class Mountain < ApplicationRecord
    has_many :trails 
    has_many :users, through: :comments
    has_many :comments
end
