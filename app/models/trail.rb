class Trail < ApplicationRecord
    belongs_to :mountain

    def self.groomed_trail 
        trail = Trail.all
        trail.find_all { |i| i.groomed == true && i.mountain_id == 2}
    end
end

