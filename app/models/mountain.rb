class Mountain < ApplicationRecord
    has_many :trails 
    has_many :comments
    has_many :users, through: :comments
    validates :name, presence: true 
    validates :name, uniqueness: true 


    def groomed_trails
        count = 0
        trail = []
        # mountain = Mountain.all
        self.trails.each do |t|
            if t.groomed == true 
            count += 1
            trail << "#{t.trail_name} is groomed"
            end
        end
        "#{count} out of the #{self.trails.count} are groomed"
        trail
    end

end
