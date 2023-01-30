class Mountain < ApplicationRecord
    has_many :trails 
    has_many :comments
    has_many :users, through: :comments
    validates :name, presence: true 
    validates :name, uniqueness: true 


    def comment_rating n
        comment = []
        self.comments.each do |t|
            if (t.rating > n)
            comment << t
            end
        end
        comment
    end

end
