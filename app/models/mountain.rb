class Mountain < ApplicationRecord
    has_many :trails 
    has_many :users, through: :comments
    has_many :comments

    def self.mountain_elevation n 
        mountain = Mountain.all 
        mountain.select do |elev| 
            elev.elevation > n 
        end
    end

    # def self.practice 
    #    puts self 
    # end

end
