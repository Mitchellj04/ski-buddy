class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :mountain
    validates :title, presence: true 
end
