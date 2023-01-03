class MountainSerializer < ActiveModel::Serializer
  attributes :id, :name, :number_trails, :number_lifts, :elevation, :average_ticket, :image_url
  has_many :trails
  has_many :comments

  def average_ticket
    "Average Ticket Cost $#{self.object.average_cost}"
  end
end
